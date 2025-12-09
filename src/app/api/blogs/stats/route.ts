import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    // Get total blogs count
    const { count: totalBlogs } = await supabase
      .from('blogs')
      .select('*', { count: 'exact', head: true })

    // Get published blogs count
    const { count: publishedBlogs } = await supabase
      .from('blogs')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'published')

    // Get draft blogs count
    const { count: draftBlogs } = await supabase
      .from('blogs')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'draft')

    return NextResponse.json({
      success: true,
      stats: {
        totalBlogs: totalBlogs || 0,
        publishedBlogs: publishedBlogs || 0,
        draftBlogs: draftBlogs || 0
      }
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 })
  }
}