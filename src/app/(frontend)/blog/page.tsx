import { supabase } from '@/lib/supabase'
import { Blog } from '@/types/blog'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "Blog | BizAI Hacks",
  description:
    "Read our latest articles on AI automation, chatbots, and enterprise solutions — insights from industry experts.",
  alternates: {
    canonical: "https://bizaihacks.com/blog",
  },
  openGraph: {
    title: "AI Blog | BizAI Hacks",
    description:
      "Latest insights on AI automation and enterprise solutions from our experts.",
    url: "https://bizaihacks.com/blog",
    images: [{ url: "https://bizaihacks.com/logo.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizAI Hacks Blog",
    description:
      "AI automation insights, tips, and industry trends.",
    images: ["https://bizaihacks.com/logo.jpg"],
  },
};

export const revalidate = 60

async function getBlogs(): Promise<Blog[]> {
  try {
    const { data: blogs, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('status', 'published')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching blogs:', error)
      return []
    }

    return blogs || []
  } catch (error) {
    console.error('Supabase connection error:', error)
    return []
  }
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const BlogPage = async () => {
  const blogs = await getBlogs()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 dotted-grid opacity-30"></div>
          <div className="container mx-auto text-center relative z-10">
            <div className="hero-badge mb-8">
              <span className="hero-badge-icon">✨</span>
              Latest Insights
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover insights on AI automation and enterprise solutions
            </p>
          </div>
        </section>

        {/* Content Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {blogs.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-8 logo-gradient-box">
                <span className="text-4xl">📝</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">No blogs published yet</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                Check back soon for exciting AI insights and industry expertise!
              </p>
              <div className="bg-accent border border-border rounded-xl p-6 max-w-md mx-auto">
                <p className="text-accent-foreground text-sm">
                  💡 <strong>Admin:</strong> Create blogs from <Link href="/admin/blog" className="text-primary hover:text-primary/80 underline transition-colors">Admin Panel</Link>
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-4">Latest Articles</h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  Explore our insights and expert perspectives on AI and automation
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                  <article 
                    key={blog.id} 
                    className="group bg-background rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-border backdrop-blur-sm"
                  >
                    {/* Featured Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        {blog.category && (
                          <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                            {blog.category}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {blog.title}
                      </h3>
                      
                      {blog.excerpt && (
                        <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">
                          {blog.excerpt}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-6">
                        <span className="flex items-center gap-1">
                          <span className="w-1 h-1 bg-primary rounded-full"></span>
                          {formatDate(blog.created_at)}
                        </span>
                        {blog.author && (
                          <span className="flex items-center gap-1">
                            <span className="w-1 h-1 bg-secondary rounded-full"></span>
                            {blog.author}
                          </span>
                        )}
                      </div>
                      
                      <Link 
                        href={`/blog/${blog.slug}`}
                        className="group/btn inline-flex items-center gap-2 btn-primary-custom px-4 py-2 rounded-xl text-sm font-medium w-full justify-center"
                      >
                        Read Article
                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default BlogPage