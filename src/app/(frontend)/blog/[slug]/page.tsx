// app/(frontend)/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

async function getBlogData(slug: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  try {
    const res = await fetch(`${baseUrl}/api/blogs/slug/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getBlogData(params.slug);

  if (!data?.blog) {
    return { title: "Blog Not Found" };
  }

  return {
    title: data.blog.title,
    description: data.blog.excerpt || data.blog.title,
    openGraph: {
      title: data.blog.title,
      description: data.blog.excerpt || "",
      images: data.blog.featured_image ? [data.blog.featured_image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const data = await getBlogData(params.slug);

  if (!data?.blog) {
    notFound();
  }

  return (
    <BlogPostClient 
      blog={data.blog} 
      relatedBlogs={data.relatedBlogs || []} 
    />
  );
}