'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  // Skip layout for login page
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  useEffect(() => {
    const token = localStorage.getItem('admin_token')
    if (!token) {
      window.location.href = '/admin/login'
      return
    }
    setIsAuthenticated(true)
    setLoading(false)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    localStorage.removeItem('admin_user')
    // Force redirect to login
    window.location.href = '/admin/login'
  }

  if (loading) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-background border-r border-border flex flex-col">
        {/* Logo Section */}
        <div className="p-6 border-b border-border bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-background"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">BizAI Hacks</h1>
              <p className="text-xs text-muted-foreground font-medium">Admin Dashboard</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          <Link 
            href="/admin" 
            className={`nav-link flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              pathname === '/admin' 
                ? 'bg-primary text-primary-foreground shadow-lg' 
                : 'text-muted-foreground hover:text-foreground hover:bg-accent'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v0H8v0z" />
            </svg>
            Dashboard
          </Link>

          {/* Blog Management Section */}
          <div className="pt-4">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-4">
              Blog Management
            </p>
            
            <Link 
              href="/admin/blog" 
              className={`nav-link flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                pathname === '/admin/blog' 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              All Blogs
            </Link>
            
            <Link 
              href="/admin/blog/create" 
              className={`nav-link flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                pathname === '/admin/blog/create' 
                  ? 'bg-secondary text-secondary-foreground shadow-lg' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create Blog
            </Link>
            
            <div className="px-4 py-3">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Quick Actions</div>
              <div className="space-y-2">
                <Link 
                  href="/admin/blog?filter=recent"
                  className="group flex items-center gap-3 w-full text-left px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
                >
                  <div className="w-6 h-6 bg-blue-100 rounded-md flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <span className="font-medium">Edit Recent</span>
                </Link>
                
                <Link 
                  href="/admin/blog?status=published"
                  className="group flex items-center gap-3 w-full text-left px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
                >
                  <div className="w-6 h-6 bg-green-100 rounded-md flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <span className="font-medium">View Published</span>
                </Link>
                
                <Link 
                  href="/admin/blog?status=draft"
                  className="group flex items-center gap-3 w-full text-left px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-all duration-200"
                >
                  <div className="w-6 h-6 bg-orange-100 rounded-md flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <svg className="w-3.5 h-3.5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="font-medium">Manage Drafts</span>
                </Link>
                
                <Link 
                  href="/admin/blog/bulk-delete"
                  className="group flex items-center gap-3 w-full text-left px-3 py-2.5 text-sm text-muted-foreground hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                >
                  <div className="w-6 h-6 bg-red-100 rounded-md flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <svg className="w-3.5 h-3.5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                  <span className="font-medium">Bulk Delete</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-border">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-gradient-to-r from-background to-accent/20 border-b border-border px-6 py-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <span>Admin</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-foreground font-medium">
                    {pathname === '/admin' ? 'Dashboard' : 
                     pathname === '/admin/blog' ? 'Blog Management' :
                     pathname === '/admin/blog/create' ? 'Create New Blog' :
                     pathname === '/admin/blog/bulk-delete' ? 'Bulk Delete Blogs' : 'Admin'}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  {pathname === '/admin' ? 'Dashboard' : 
                   pathname === '/admin/blog' ? 'Blog Management' :
                   pathname === '/admin/blog/create' ? 'Create New Blog' :
                   pathname === '/admin/blog/bulk-delete' ? 'Bulk Delete Blogs' : 'Admin'}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {pathname === '/admin' ? 'Overview of your content and analytics' : 
                   pathname === '/admin/blog' ? 'Manage all your blog posts' :
                   pathname === '/admin/blog/create' ? 'Write and publish new content' :
                   pathname === '/admin/blog/bulk-delete' ? 'Delete multiple blogs at once' : 'Admin panel'}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 px-4 py-2 bg-background/80 rounded-xl border border-border/50">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-foreground">Admin User</p>
                  <p className="text-xs text-muted-foreground">Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}