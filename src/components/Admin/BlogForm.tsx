// components/Admin/BlogForm.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Save, Globe, Eye, EyeOff } from "lucide-react";
import ImageUpload from "./ImageUpload";

interface Blog {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  category: string;
  tags: string[];
  author: string;
  is_published: boolean;
  website: string;
}

const WEBSITES = [
  { id: "soltech360", name: "SolTech360" },
  { id: "bizaihacks", name: "BizAI Hacks" },
  { id: "ebooks", name: "Ebooks" },
  { id: "nexus", name: "Nexus" },
  { id: "website5", name: "Website 5" },
  { id: "website6", name: "Website 6" },
  { id: "website7", name: "Website 7" },
];

const CATEGORIES = [
  "Technology",
  "Marketing",
  "Business",
  "Development",
  "Design",
  "AI & ML",
  "Tutorial",
  "News",
  "General",
];

interface Props {
  blog?: Blog;
  isEditing?: boolean;
}

export default function BlogForm({ blog, isEditing = false }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  
  const [formData, setFormData] = useState({
    title: blog?.title || "",
    slug: blog?.slug || "",
    excerpt: blog?.excerpt || "",
    content: blog?.content || "",
    featured_image: blog?.featured_image || "",
    category: blog?.category || "General",
    tags: blog?.tags?.join(", ") || "",
    author: blog?.author || "Admin",
    is_published: blog?.is_published || false,
    website: blog?.website || process.env.NEXT_PUBLIC_WEBSITE_ID || "soltech360",
  });

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...formData,
        tags: formData.tags.split(",").map((t) => t.trim()).filter(Boolean),
      };

      const url = isEditing ? `/api/blogs/${blog?.id}` : "/api/blogs";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to save blog");
      }

      router.push("/admin/blogs");
      router.refresh();
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl">
      {/* Header Actions */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          {isEditing ? "Edit Blog Post" : "Create New Blog Post"}
        </h2>
        <button
          type="button"
          onClick={() => setShowPreview(!showPreview)}
          className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          {showPreview ? (
            <>
              <EyeOff className="w-4 h-4" />
              Hide Preview
            </>
          ) : (
            <>
              <Eye className="w-4 h-4" />
              Show Preview
            </>
          )}
        </button>
      </div>

      <div className={`grid ${showPreview ? 'grid-cols-2 gap-8' : 'grid-cols-1'}`}>
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Website Selector */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5">
            <label className="flex items-center gap-2 text-sm font-bold text-blue-800 mb-3">
              <Globe className="w-4 h-4" />
              Select Website *
            </label>
            <select
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-white font-medium"
              required
            >
              {WEBSITES.map((site) => (
                <option key={site.id} value={site.id}>
                  {site.name}
                </option>
              ))}
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value,
                  slug: isEditing ? formData.slug : generateSlug(e.target.value),
                })
              }
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-lg"
              placeholder="Enter an engaging blog title"
              required
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              URL Slug *
            </label>
            <div className="flex items-center">
              <span className="px-4 py-3 bg-gray-100 border border-r-0 border-gray-200 rounded-l-xl text-gray-500 text-sm">
                /blog/
              </span>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-r-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="blog-url-slug"
                required
              />
            </div>
          </div>

          {/* Featured Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Featured Image
            </label>
            <ImageUpload
              value={formData.featured_image}
              onChange={(url) => setFormData({ ...formData, featured_image: url })}
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Excerpt / Short Description
            </label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              rows={3}
              placeholder="A brief summary of your blog post..."
              maxLength={300}
            />
            <p className="text-xs text-gray-400 mt-1">
              {formData.excerpt.length}/300 characters
            </p>
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Content (HTML) *
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-mono text-sm resize-none"
              rows={20}
              placeholder="<h2>Introduction</h2>
<p>Write your blog content here...</p>

<h2>Main Section</h2>
<p>More content...</p>"
              required
            />
          </div>

          {/* Category & Author */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Author
              </label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Author name"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tags
            </label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="technology, ai, web development (comma separated)"
            />
          </div>

          {/* Published Toggle */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <p className="font-semibold text-gray-900">Publish Status</p>
              <p className="text-sm text-gray-500">
                {formData.is_published 
                  ? "This blog will be visible to public" 
                  : "This blog will be saved as draft"
                }
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.is_published}
                onChange={(e) => setFormData({ ...formData, is_published: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-gray-300 peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-green-500 after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
            </label>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex-1 px-6 py-4 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  {isEditing ? "Update Blog" : "Create Blog"}
                </>
              )}
            </button>
          </div>
        </form>

        {/* Live Preview */}
        {showPreview && (
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white sticky top-4 h-fit max-h-[calc(100vh-2rem)] overflow-y-auto">
            <div className="p-4 bg-gray-50 border-b">
              <p className="text-sm font-medium text-gray-500">Live Preview</p>
            </div>
            <div className="p-6">
              {formData.featured_image && (
                <img
                  src={formData.featured_image}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <span className="text-xs font-bold text-blue-600 uppercase">
                {formData.category}
              </span>
              <h1 className="text-2xl font-bold text-gray-900 mt-2 mb-3">
                {formData.title || "Blog Title"}
              </h1>
              <p className="text-gray-600 text-sm mb-4">
                {formData.excerpt || "Blog excerpt will appear here..."}
              </p>
              <div className="text-xs text-gray-400 mb-4">
                By {formData.author || "Author"} • {new Date().toLocaleDateString()}
              </div>
              <hr className="my-4" />
              <div 
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ 
                  __html: formData.content || "<p>Blog content preview...</p>" 
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}