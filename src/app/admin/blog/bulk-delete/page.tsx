'use client'

import { useState, useEffect } from 'react'
import { Blog } from '@/types/blog'
import { Trash2, Calendar, AlertTriangle, CheckSquare, Square } from 'lucide-react'

export default function BulkDeletePage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedBlogs, setSelectedBlogs] = useState<number[]>([])
  const [sortBy, setSortBy] = useState<'oldest' | 'newest'>('oldest')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/admin/get-blogs')
      const result = await response.json()
      if (response.ok) {
        setBlogs(result.data || [])
      }
    } catch (error) {
      console.error('Failed to fetch blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  const sortedBlogs = [...blogs].sort((a, b) => {
    const dateA = new Date(a.created_at).getTime()
    const dateB = new Date(b.created_at).getTime()
    return sortBy === 'oldest' ? dateA - dateB : dateB - dateA
  })

  const toggleBlogSelection = (blogId: number) => {
    setSelectedBlogs(prev => 
      prev.includes(blogId) 
        ? prev.filter(id => id !== blogId)
        : [...prev, blogId]
    )
  }

  const selectOldest = (count: number) => {
    const oldestBlogs = sortedBlogs.slice(0, count).map(blog => blog.id)
    setSelectedBlogs(oldestBlogs)
  }

  const handleBulkDelete = async () => {
    if (selectedBlogs.length === 0) return
    
    const confirmed = window.confirm(`Are you sure you want to delete ${selectedBlogs.length} blog(s)? This action cannot be undone.`)
    if (!confirmed) return

    setDeleting(true)
    try {
      // Create API calls for each blog deletion
      const deletePromises = selectedBlogs.map(blogId =>
        fetch(`/api/admin/delete-blog/${blogId}`, { method: 'DELETE' })
      )
      
      await Promise.all(deletePromises)
      
      // Refresh blogs list
      await fetchBlogs()
      setSelectedBlogs([])
      alert(`Successfully deleted ${selectedBlogs.length} blog(s)`)
    } catch (error) {
      console.error('Failed to delete blogs:', error)
      alert('Failed to delete some blogs. Please try again.')
    } finally {
      setDeleting(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          <h1 className="text-2xl font-bold text-red-900">Bulk Delete Blogs</h1>
        </div>
        <p className="text-red-700 text-sm">
          ⚠️ Warning: This action will permanently delete selected blogs and cannot be undone.
        </p>
      </div>

      {/* Controls */}
      <div className="bg-background rounded-2xl shadow-lg border border-border p-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Sort By:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'oldest' | 'newest')}
                className="px-3 py-2 border border-border rounded-lg bg-background text-foreground"
              >
                <option value="oldest">Oldest First</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Quick Select:</label>
              <div className="flex gap-2">
                <button
                  onClick={() => selectOldest(5)}
                  className="px-3 py-2 text-xs bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                >
                  5 Oldest
                </button>
                <button
                  onClick={() => selectOldest(10)}
                  className="px-3 py-2 text-xs bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                >
                  10 Oldest
                </button>
                <button
                  onClick={() => selectOldest(15)}
                  className="px-3 py-2 text-xs bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                >
                  15 Oldest
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              {selectedBlogs.length} of {blogs.length} selected
            </div>
            <button
              onClick={handleBulkDelete}
              disabled={selectedBlogs.length === 0 || deleting}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white rounded-lg transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              {deleting ? 'Deleting...' : `Delete Selected (${selectedBlogs.length})`}
            </button>
          </div>
        </div>
      </div>

      {/* Blogs List */}
      <div className="bg-background rounded-2xl shadow-lg border border-border overflow-hidden">
        <div className="p-4 border-b border-border bg-muted/30">
          <h3 className="font-semibold text-foreground">
            All Blogs ({blogs.length}) - Sorted by {sortBy === 'oldest' ? 'Oldest' : 'Newest'}
          </h3>
        </div>
        
        {sortedBlogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blogs found</p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {sortedBlogs.map((blog, index) => (
              <div 
                key={blog.id}
                className={`p-4 hover:bg-accent/30 transition-colors ${
                  selectedBlogs.includes(blog.id) ? 'bg-red-50 border-l-4 border-l-red-500' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <button
                    onClick={() => toggleBlogSelection(blog.id)}
                    className="mt-1 text-muted-foreground hover:text-foreground"
                  >
                    {selectedBlogs.includes(blog.id) ? (
                      <CheckSquare className="w-5 h-5 text-red-600" />
                    ) : (
                      <Square className="w-5 h-5" />
                    )}
                  </button>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-foreground truncate">{blog.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        blog.status === 'published' 
                          ? 'bg-secondary/10 text-secondary' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {blog.status}
                      </span>
                    </div>
                    
                    {blog.excerpt && (
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
                        {blog.excerpt}
                      </p>
                    )}
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(blog.created_at).toLocaleDateString()}
                      </div>
                      <div>By {blog.author}</div>
                      {blog.category && <div>#{blog.category}</div>}
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    #{index + 1}
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