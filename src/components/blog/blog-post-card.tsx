import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { type Blog } from "@/types/blog";

type BlogPostCardProps = {
  post: Blog;
};

export default function BlogPostCard({ post }: BlogPostCardProps) {
  // Format date
  const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Card className="bg-card/70 backdrop-blur-sm border border-border/50 shadow-lg flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300">
      {post.featured_image ? (
        <div className="overflow-hidden h-48 bg-gray-100">
          <Image
            src={post.featured_image}
            alt={post.title}
            width={600}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8C42]/10 flex items-center justify-center">
          <svg className="w-16 h-16 text-[#FF6B35] opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
      )}

      <CardContent className="p-6 flex-grow flex flex-col">
        <h3 className="text-lg font-bold font-headline mb-2 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {post.excerpt || "Click to read more about this topic..."}
        </p>

        <div className="mt-auto">
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formattedDate}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-2 font-semibold text-[#FF6B35] hover:text-[#FF8C42] transition-colors"
          >
            Read More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}