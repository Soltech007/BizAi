import { supabase } from '@/lib/supabase'
import { Blog } from '@/types/blog'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react'
import { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for all published blogs
export async function generateStaticParams() {
  const { data: blogs } = await supabase
    .from('blogs')
    .select('slug')
    .eq('status', 'published')

  return blogs?.map((blog) => ({
    slug: blog.slug,
  })) || []
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const blog = await getBlog(slug)

  if (!blog) {
    return {
      title: 'Blog Not Found | BizAI Hacks',
    }
  }

  return {
    title: `${blog.title} | BizAI Hacks Blog`,
    description: blog.excerpt || blog.title,
    openGraph: {
      title: blog.title,
      description: blog.excerpt || blog.title,
      url: `https://bizaihacks.com/blog/${blog.slug}`,
      images: blog.featured_image ? [{ url: blog.featured_image }] : [],
      type: 'article',
      publishedTime: blog.created_at,
      authors: blog.author ? [blog.author] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt || blog.title,
      images: blog.featured_image ? [blog.featured_image] : [],
    },
  }
}

async function getBlog(slug: string): Promise<Blog | null> {
  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (error || !blog) {
    return null
  }

  return blog
}

async function getRelatedBlogs(currentSlug: string, category?: string): Promise<Blog[]> {
  let query = supabase
    .from('blogs')
    .select('*')
    .eq('status', 'published')
    .neq('slug', currentSlug)
    .limit(3)

  if (category) {
    query = query.eq('category', category)
  }

  const { data: blogs } = await query.order('created_at', { ascending: false })
  return blogs || []
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params
  const blog = await getBlog(slug)

  if (!blog) {
    notFound()
  }

  const relatedBlogs = await getRelatedBlogs(slug, blog.category || undefined)

  // Parse tags if they exist
  const tags = blog.tags ? blog.tags.split(',').map(tag => tag.trim()) : []

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Featured Image */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Back Button */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Category */}
          {blog.category && (
            <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-medium mb-4">
              {blog.category}
            </span>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl">
            {blog.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{formatDate(blog.created_at)}</span>
            </div>
            {blog.author && (
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{blog.author}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {blog.featured_image && (
        <div className="container mx-auto px-4 -mt-8">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={blog.featured_image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Content Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Blog Content */}
          <article 
            className="prose prose-lg max-w-none
              prose-headings:text-gray-800 prose-headings:font-bold
              prose-p:text-gray-600 prose-p:leading-relaxed
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-xl prose-img:shadow-lg
              prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
              prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:text-gray-100"
            dangerouslySetInnerHTML={{ __html: blog.content || '' }}
          />

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-5 h-5 text-gray-500" />
                {tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Enjoyed this article?
            </h3>
            <p className="text-gray-600">
              Share it with your network and help others discover AI automation insights!
            </p>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedBlogs.length > 0 && (
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedBlogs.map((relatedBlog) => (
                <Link 
                  key={relatedBlog.id} 
                  href={`/blog/${relatedBlog.slug}`}
                  className="group"
                >
                  <article className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-40 bg-gradient-to-br from-blue-100 to-purple-100">
                      {relatedBlog.featured_image ? (
                        <Image
                          src={relatedBlog.featured_image}
                          alt={relatedBlog.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-4xl">📝</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-2">
                        {formatDate(relatedBlog.created_at)}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover how BizAI Hacks can automate your operations and boost productivity.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}