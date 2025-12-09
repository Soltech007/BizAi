'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    ArrowLeft,
    Calendar,
    Clock,
    Share2,
    Facebook,
    Twitter,
    Linkedin,
    Copy,
    Mail,
    ArrowRight,
    MessageSquare,
    Heart,
    Bookmark
} from 'lucide-react';
import { type Blog } from '@/types/blog';
import BlogPostCard from '@/components/blog/blog-post-card';
import toast from 'react-hot-toast';

interface BlogDetailClientProps {
    blog: Blog;
    relatedBlogs: Blog[];
}

export default function BlogDetailClient({ blog, relatedBlogs }: BlogDetailClientProps) {
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [commentForm, setCommentForm] = useState({ name: '', email: '', message: '' });

    const formattedDate = new Date(blog.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const handleShare = (platform: string) => {
        const url = window.location.href;
        const title = blog.title;

        let shareUrl = '';

        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                break;
            case 'copy':
                navigator.clipboard.writeText(url);
                toast.success('Link copied to clipboard!');
                return;
        }

        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
    };

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success('Comment submitted! We\'ll review it shortly.');
        setCommentForm({ name: '', email: '', message: '' });
    };

    return (
        <article className="min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16 md:py-24">
                <div className="container max-w-4xl px-4 md:px-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>

                    <h1 className="text-white text-3xl md:text-5xl font-bold font-headline tracking-tight mb-6 leading-tight">
                        {blog.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-8">
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {formattedDate}
                        </span>

                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setLiked(!liked)}
                            className={`${liked ? 'bg-red-500 text-white border-red-500' : 'text-white border-white hover:bg-white hover:text-black'}`}
                        >
                            <Heart className={`w-4 h-4 mr-2 ${liked ? 'fill-current' : ''}`} />
                            {liked ? 'Liked' : 'Like'}
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setBookmarked(!bookmarked)}
                            className={`${bookmarked ? 'bg-blue-500 text-white border-blue-500' : 'text-white border-white hover:bg-white hover:text-black'}`}
                        >
                            <Bookmark className={`w-4 h-4 mr-2 ${bookmarked ? 'fill-current' : ''}`} />
                            {bookmarked ? 'Saved' : 'Save'}
                        </Button>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-400 text-sm">Share:</span>
                            <Button variant="ghost" size="sm" onClick={() => handleShare('facebook')} className="text-white hover:bg-white hover:text-black">
                                <Facebook className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleShare('twitter')} className="text-white hover:bg-white hover:text-black">
                                <Twitter className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleShare('linkedin')} className="text-white hover:bg-white hover:text-black">
                                <Linkedin className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleShare('copy')} className="text-white hover:bg-white hover:text-black">
                                <Copy className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Image */}
            {blog.featured_image && (
                <div className="container max-w-4xl px-4 md:px-8 -mt-12 relative z-10">
                    <div className="rounded-xl overflow-hidden shadow-2xl">
                        <Image
                            src={blog.featured_image}
                            alt={blog.title}
                            width={1200}
                            height={600}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="container max-w-4xl px-4 md:px-8 py-12 md:py-20">
                <div className="grid lg:grid-cols-4 gap-12">
                    {/* Article Content */}
                    <div className="lg:col-span-3">
                        {/* Excerpt */}
                        {blog.excerpt && (
                            <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8C42]/10 p-6 rounded-xl mb-8 border-l-4 border-[#FF6B35]">
                                <p className="text-lg text-gray-700 italic leading-relaxed">
                                    {blog.excerpt}
                                </p>
                            </div>
                        )}

                        {/* Main Content */}
                        <div
                            className="prose prose-lg max-w-none prose-headings:font-headline prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#FF6B35] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-blockquote:border-[#FF6B35] prose-blockquote:bg-gray-50 prose-blockquote:italic prose-img:rounded-lg prose-img:shadow-lg"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />

                        {/* Tags */}
                        {blog.tags && (
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {blog.tags.split(',').map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">
                                            {tag.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            {/* Table of Contents (if needed) */}
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-4 flex items-center">
                                        <MessageSquare className="w-4 h-4 mr-2 text-[#FF6B35]" />
                                        Quick Links
                                    </h3>
                                    <div className="space-y-2">
                                        <Link href="#" className="block text-sm text-gray-600 hover:text-[#FF6B35] transition-colors">
                                            Share Article
                                        </Link>
                                        <Link href="/contact" className="block text-sm text-gray-600 hover:text-[#FF6B35] transition-colors">
                                            Contact Us
                                        </Link>
                                        <Link href="/blog" className="block text-sm text-gray-600 hover:text-[#FF6B35] transition-colors">
                                            More Articles
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Newsletter Signup */}
                            <Card className="bg-gradient-to-br from-[#FF6B35]/5 to-[#FF8C42]/5 border-[#FF6B35]/20">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-2 text-gray-900">Stay Updated</h3>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Get weekly insights delivered to your inbox
                                    </p>
                                    <div className="space-y-3">
                                        <Input
                                            type="email"
                                            placeholder="Your email"
                                            className="text-sm"
                                        />
                                        <Button
                                            size="sm"
                                            className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]"
                                        >
                                            Subscribe
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            {/* Comments Section */}
            <div className="bg-gray-50 py-12 md:py-20">
                <div className="container max-w-4xl px-4 md:px-8">
                    <h2 className="text-2xl font-bold font-headline mb-8">Leave a Comment</h2>

                    <Card>
                        <CardContent className="p-6">
                            <form onSubmit={handleCommentSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Name *</label>
                                        <Input
                                            value={commentForm.name}
                                            onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email *</label>
                                        <Input
                                            type="email"
                                            value={commentForm.email}
                                            onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Comment *</label>
                                    <Textarea
                                        rows={4}
                                        value={commentForm.message}
                                        onChange={(e) => setCommentForm({ ...commentForm, message: e.target.value })}
                                        placeholder="Share your thoughts..."
                                        required
                                    />
                                </div>
                                <Button type="submit" className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]">
                                    Post Comment
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Related Posts */}
            {relatedBlogs.length > 0 && (
                <div className="py-12 md:py-20 bg-white">
                    <div className="container max-w-7xl px-4 md:px-8">
                        <h2 className="text-2xl md:text-3xl font-bold font-headline mb-8">Related Articles</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedBlogs.map((post) => (
                                <BlogPostCard key={post.id} post={post} />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Final CTA */}
            <div className="py-12 md:py-20 bg-gray-900">
                <div className="container max-w-4xl px-4 md:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold font-headline mb-4 text-white">
                        Ready to Transform Your Transport Business?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Start your journey with Freight Sync today and implement these strategies
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]">
                            <Link href="/contact">
                                Get Started Free
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                            <Link href="/blog">
                                Read More Articles
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </article>
    );
}