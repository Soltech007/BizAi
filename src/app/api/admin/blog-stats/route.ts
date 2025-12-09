import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET() {
  try {
    const { data: allBlogs, error: allError } = await supabaseAdmin
      .from('blogs')
      .select('status')

    if (allError) {
      return NextResponse.json({ error: allError.message }, { status: 400 })
    }

    const total = allBlogs?.length || 0
    const published = allBlogs?.filter(blog => blog.status === 'published').length || 0
    const drafts = allBlogs?.filter(blog => blog.status === 'draft').length || 0

    return NextResponse.json({ 
      total,
      published,
      drafts
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
}