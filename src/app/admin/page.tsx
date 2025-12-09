'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { BookOpen, CheckCircle, FileText, Zap, Edit3, Clipboard, BarChart3, TrendingUp, Target, Hand } from 'lucide-react'

interface BlogStats {
  total: number
  published: number
  drafts: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<BlogStats>({ total: 0, published: 0, drafts: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
    
    // Add keyboard shortcuts
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'n':
            e.preventDefault()
            window.location.href = '/admin/blog/create'
            break
          case 'b':
            e.preventDefault()
            window.location.href = '/admin/blog'
            break
        }
      }
    }
    
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/blog-stats')
      const data = await response.json()
      if (response.ok) {
        setStats(data)
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border">
        <div className="absolute inset-0 dotted-grid opacity-20"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 logo-gradient-box">
              <Hand className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">Welcome Back!</h2>
              <p className="text-muted-foreground">Ready to create amazing content?</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="group bg-background p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary">{loading ? '...' : stats.total}</p>
              <p className="text-sm text-muted-foreground">Total Blogs</p>
            </div>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{width: loading ? '0%' : '100%'}}></div>
          </div>
        </div>
        
        <div className="group bg-background p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-secondary" />
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-secondary">{loading ? '...' : stats.published}</p>
              <p className="text-sm text-muted-foreground">Published</p>
            </div>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-secondary h-2 rounded-full transition-all duration-500" style={{width: loading ? '0%' : `${stats.total > 0 ? (stats.published / stats.total) * 100 : 0}%`}}></div>
          </div>
        </div>
        
        <div className="group bg-background p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-muted/20 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-muted-foreground" />
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-muted-foreground">{loading ? '...' : stats.drafts}</p>
              <p className="text-sm text-muted-foreground">Drafts</p>
            </div>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-muted-foreground h-2 rounded-full transition-all duration-500" style={{width: loading ? '0%' : `${stats.total > 0 ? (stats.drafts / stats.total) * 100 : 0}%`}}></div>
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-background p-6 rounded-2xl shadow-lg border border-border">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary" />
            Quick Actions
          </h3>
          <div className="space-y-3">
            <Link 
              href="/admin/blog/create"
              className="group w-full btn-primary-custom px-6 py-4 rounded-xl flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Edit3 className="w-5 h-5" />
                <div>
                  <p className="font-semibold">Create New Blog</p>
                  <p className="text-sm opacity-80">Start writing your next article</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs opacity-60 bg-white/20 px-2 py-1 rounded">Ctrl+N</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
            
            <Link 
              href="/admin/blog"
              className="group w-full bg-accent hover:bg-accent/80 text-accent-foreground px-6 py-4 rounded-xl transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Clipboard className="w-5 h-5" />
                <div>
                  <p className="font-semibold">Manage Blogs</p>
                  <p className="text-sm opacity-80">Edit and organize content</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs opacity-60 bg-black/10 px-2 py-1 rounded">Ctrl+B</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
            
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link 
                href="/admin/blog?status=draft"
                className="group bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground px-4 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span className="text-sm font-medium">Drafts</span>
              </Link>
              
              <Link 
                href="/blog"
                target="_blank"
                className="group bg-secondary/10 hover:bg-secondary/20 text-secondary hover:text-secondary px-4 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">View Site</span>
              </Link>
              
              <Link 
                href="/admin/blog/bulk-delete"
                className="group bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 px-4 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span className="text-sm font-medium">Bulk Delete</span>
              </Link>
              
              <Link 
                href="/admin/blog?filter=recent"
                className="group bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary px-4 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">Recent</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-background p-6 rounded-2xl shadow-lg border border-border">
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-primary" />
            Overview
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-accent/50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Content Status</p>
                  <p className="text-sm text-muted-foreground">Track your progress</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-primary">{loading ? '...' : `${stats.total > 0 ? Math.round((stats.published / stats.total) * 100) : 0}%`}</p>
                <p className="text-xs text-muted-foreground">Published</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-secondary/10 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Next Goal</p>
                  <p className="text-sm text-muted-foreground">Keep creating!</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-secondary">{stats.total + 1}</p>
                <p className="text-xs text-muted-foreground">Next Blog</p>
              </div>
            </div>
            
            <div className="pt-2">
              <Link 
                href="/admin/blog"
                className="group w-full bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 border border-border hover:border-primary/20 px-4 py-3 rounded-xl transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">View All Blogs</p>
                    <p className="text-sm text-muted-foreground">Manage your content</p>
                  </div>
                </div>
                <span className="group-hover:translate-x-1 transition-transform text-muted-foreground">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}