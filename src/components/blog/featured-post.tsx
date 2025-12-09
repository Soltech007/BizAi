import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { type Blog } from "@/types/blog";

type FeaturedPostProps = {
  post: Blog;
};

export default function FeaturedPost({ post }: FeaturedPostProps) {
  // Format date
  const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100">
        {post.featured_image ? (
          <Image
            src={post.featured_image}
            alt={post.title}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        ) : (
          <div className="w-full h-[400px] bg-gradient-to-br from-[#FF6B35]/20 to-[#FF8C42]/20 flex items-center justify-center">
            <svg className="w-24 h-24 text-[#FF6B35] opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
        )}
      </div>
      <div>
        <span className="text-sm font-semibold uppercase text-[#FF6B35] tracking-wider">Featured Insight</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline">
          {post.title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {post.excerpt || "Discover the strategies and insights that can transform your transport business."}
        </p>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {formattedDate}
          </span>

        </div>
        <Button asChild className="mt-6 bg-gradient-to-r from-[#FF6B35] to-[#FF8C42]" size="lg">
          <Link href={`/blog/${post.slug}`}>
            Read Full Article <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}