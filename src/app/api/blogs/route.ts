import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { verifyAuth } from '@/lib/auth'

export async function GET() {
  try {
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('status', 'published')
      .order('created_at', { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, blogs })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    // Verify authentication
    const auth = await verifyAuth(req)
    if (!auth.authenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const blogData = await req.json()
    
    const { data: blog, error } = await supabase
      .from('blogs')
      .insert([{
        ...blogData,
        status: blogData.status || 'draft',
        author: auth.user?.email || 'Unknown'
      }])
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, blog }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 })
  }
}

// import { supabase } from "@/lib/supabase";

// export async function GET() {
//   const { data, error } = await supabase
//     .from("blogs")            // ← tumhari table ka naam
//     .select("*")
//     .limit(1);

//   if (error) {
//     return Response.json({ ok: false, error: error.message });
//   }

//   return Response.json({ ok: true, data });
// }

