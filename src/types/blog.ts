export interface Blog {
  id: number
  title: string
  slug: string
  content: string
  excerpt?: string
  status: 'draft' | 'published'
  author: string
  featured_image?: string
  tags?: string
  category?: string
  created_at: string
  updated_at: string
}

export interface CreateBlogData {
  title: string
  slug: string
  content: string
  excerpt?: string
  status?: 'draft' | 'published'
  author: string
  featured_image?: string
  tags?: string
  category?: string
}