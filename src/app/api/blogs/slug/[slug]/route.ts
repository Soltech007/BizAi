// app/api/blogs/slug/[slug]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const WEBSITE_ID = process.env.NEXT_PUBLIC_WEBSITE_ID || 'default';

function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}

// GET blog by slug with related blogs
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const supabase = createAdminClient();
    const { slug } = params;

    // 👇 Get blog filtered by slug AND website
    const { data: blog, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .eq('website', WEBSITE_ID)
      .eq('is_published', true)
      .single();

    if (error || !blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    // Increment views
    await supabase
      .from('blogs')
      .update({ views: (blog.views || 0) + 1 })
      .eq('id', blog.id);

    // 👇 Get related blogs (same category, same website)
    const { data: relatedBlogs } = await supabase
      .from('blogs')
      .select('id, title, slug, excerpt, featured_image, category, created_at')
      .eq('website', WEBSITE_ID)
      .eq('is_published', true)
      .eq('category', blog.category)
      .neq('id', blog.id)
      .order('created_at', { ascending: false })
      .limit(3);

    return NextResponse.json({
      blog,
      relatedBlogs: relatedBlogs || [],
    });
  } catch (error: any) {
    console.error('Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}