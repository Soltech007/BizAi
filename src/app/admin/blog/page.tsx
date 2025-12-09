'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Blog } from '@/types/blog'
import { Plus, Search, Filter, Eye, Edit, Calendar, User, Tag, MoreVertical } from 'lucide-react'

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const searchParams = useSearchParams()

  useEffect(() => {
    fetchBlogs()
    
    // Handle URL parameters for quick actions
    const statusParam = searchParams.get('status')
    const filterParam = searchParams.get('filter')
    
    if (statusParam) {
      setFilterStatus(statusParam)
    }
    
    if (filterParam === 'recent') {
      // Sort by most recent when filter=recent
      setFilterStatus('all')
    }
  }, [searchParams])

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/admin/get-blogs')
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch blogs')
      }

      setBlogs(result.data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch blogs')
    } finally {
      setLoading(false)
    }
  }

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || blog.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    return status === 'published' ? 'bg-secondary/10 text-secondary' : 'bg-muted text-muted-foreground'
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
        <div className="text-red-600 font-medium mb-2">Error Loading Blogs</div>
        <p className="text-red-500 text-sm">{error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border">
        <div className="absolute inset-0 dotted-grid opacity-20"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Blog Management</h1>
              <p className="text-muted-foreground">Create, edit, and manage your blog content</p>
            </div>
            <Link 
              href="/admin/blog/create"
              className="group btn-primary-custom px-6 py-3 rounded-xl font-medium flex items-center gap-2 w-fit"
            >
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              Create New Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-background rounded-2xl shadow-lg border border-border p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search blogs by title or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="pl-10 pr-8 py-3 border border-border rounded-xl bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors appearance-none cursor-pointer"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-background rounded-xl p-4 border border-border">
          <div className="text-2xl font-bold text-primary">{blogs.length}</div>
          <div className="text-sm text-muted-foreground">Total Blogs</div>
        </div>
        <div className="bg-background rounded-xl p-4 border border-border">
          <div className="text-2xl font-bold text-secondary">{blogs.filter(b => b.status === 'published').length}</div>
          <div className="text-sm text-muted-foreground">Published</div>
        </div>
        <div className="bg-background rounded-xl p-4 border border-border">
          <div className="text-2xl font-bold text-muted-foreground">{blogs.filter(b => b.status === 'draft').length}</div>
          <div className="text-sm text-muted-foreground">Drafts</div>
        </div>
      </div>

      {/* Blogs Grid */}
      <div className="bg-background rounded-2xl shadow-lg border border-border overflow-hidden">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 logo-gradient-box">
              <Plus className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              {searchTerm || filterStatus !== 'all' ? 'No blogs found' : 'No blogs yet'}
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              {searchTerm || filterStatus !== 'all' 
                ? 'Try adjusting your search or filter criteria' 
                : 'Get started by creating your first blog post'}
            </p>
            {!searchTerm && filterStatus === 'all' && (
              <Link 
                href="/admin/blog/create"
                className="btn-primary-custom px-6 py-3 rounded-xl font-medium inline-flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Create Your First Blog
              </Link>
            )}
          </div>
        ) : (
          <div className="divide-y divide-border">
            {filteredBlogs.map((blog, index) => (
              <div 
                key={blog.id} 
                className="group p-6 hover:bg-accent/30 transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors truncate">
                        {blog.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(blog.status)}`}>
                        {blog.status}
                      </span>
                    </div>
                    
                    {blog.excerpt && (
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                        {blog.excerpt}
                      </p>
                    )}
                    
                    <div className="flex items-center gap-6 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(blog.created_at).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {blog.author}
                      </div>
                      {blog.category && (
                        <div className="flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {blog.category}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 ml-4">
                    <Link 
                      href={`/blog/${blog.slug}`}
                      className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                      title="View Blog"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                    <button className="p-2 text-muted-foreground hover:text-secondary hover:bg-secondary/10 rounded-lg transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}