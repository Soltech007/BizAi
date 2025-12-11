// app/api/blogs/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Website ID from environment
const WEBSITE_ID = process.env.NEXT_PUBLIC_WEBSITE_ID || 'default';

// Create admin client
function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    console.error('Missing Supabase credentials');
    throw new Error('Database configuration error');
  }

  return createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

// GET blogs
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const published = searchParams.get('published');
    const limit = searchParams.get('limit');
    const category = searchParams.get('category');
    const website = searchParams.get('website');
    const isAdmin = searchParams.get('admin') === 'true';

    const supabase = createAdminClient();

    let query = supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    // 👇 WEBSITE FILTER LOGIC
    if (isAdmin) {
      // Admin Panel: Filter by specific website or show all
      if (website && website !== 'all') {
        query = query.eq('website', website);
      }
      // Admin can see drafts too, no published filter unless specified
      if (published === 'true') {
        query = query.eq('is_published', true);
      }
    } else {
      // 👇 PUBLIC FRONTEND: Always filter by current website
      query = query.eq('website', WEBSITE_ID);
      
      // Frontend only shows published blogs
      if (published === 'true') {
        query = query.eq('is_published', true);
      }
    }

    if (category) {
      query = query.eq('category', category);
    }

    if (limit) {
      query = query.limit(parseInt(limit));
    }

    const { data, error } = await query;

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data || []);
  } catch (error: any) {
    console.error('GET error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST new blog
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log('Creating blog:', body.title);

    // Validate
    if (!body.title || !body.slug || !body.content) {
      return NextResponse.json(
        { error: 'Title, slug, and content are required' },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();

    const blogData = {
      title: body.title.trim(),
      slug: body.slug.trim(),
      excerpt: body.excerpt?.trim() || '',
      content: body.content,
      featured_image: body.featured_image || null,
      category: body.category?.trim() || 'General',
      tags: body.tags || [],
      author: body.author?.trim() || 'Admin',
      is_published: Boolean(body.is_published),
      views: 0,
      website: body.website || WEBSITE_ID, // 👈 IMPORTANT: Add website
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('blogs')
      .insert([blogData])
      .select()
      .single();

    if (error) {
      console.error('Insert error:', error);
      
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'A blog with this slug already exists' },
          { status: 400 }
        );
      }
      
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log('Blog created:', data.id);
    return NextResponse.json(data, { status: 201 });
  } catch (error: any) {
    console.error('POST error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}