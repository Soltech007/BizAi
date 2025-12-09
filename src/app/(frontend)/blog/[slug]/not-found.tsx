import Link from 'next/link'
import { ArrowLeft, FileQuestion } from 'lucide-react'

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <FileQuestion className="w-24 h-24 text-gray-300 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Blog Not Found
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the blog post you're looking for doesn't exist or has been removed.
        </p>
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>
    </div>
  )
}