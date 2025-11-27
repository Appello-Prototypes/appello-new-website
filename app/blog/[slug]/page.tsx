import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import { markdownToHtml } from "@/lib/markdown";
import MDXContent from "@/components/blog/MDXContent";
import TableOfContents from "@/components/blog/TableOfContents";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import SocialShare from "@/components/blog/SocialShare";
import RelatedPosts from "@/components/blog/RelatedPosts";
import AuthorCard from "@/components/blog/AuthorCard";
import { generateTOC } from "@/lib/toc";
import { getRelatedPosts } from "@/lib/related-posts";
import { getAuthorByName } from "@/lib/authors";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Appello Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);
  const tocItems = generateTOC(contentHtml);
  const relatedPosts = getRelatedPosts(post, 3);
  
  // Get author or create default
  let author = getAuthorByName(post.author);
  if (!author) {
    author = getAuthorByName("Appello Team");
  }
  if (!author) {
    // Fallback author if none found
    author = {
      slug: "appello-team",
      name: post.author,
      role: "Appello Team",
      bio: "",
      avatar: "",
    };
  }

  return (
    <main className="min-h-screen">
      <ReadingProgressBar />
      <Header />
      
      <article className="bg-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main content */}
              <div className="lg:col-span-3">
            <Link
              href="/blog"
              className="text-primary hover:text-primary-dark transition-colors mb-8 inline-flex items-center gap-2 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              <span>Back to Blog</span>
            </Link>

            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-400">•</span>
                <time dateTime={post.date} className="text-gray-600">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                {post.readingTime && (
                  <>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">{post.readingTime} min read</span>
                  </>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>
              
              <AuthorCard author={author} showBio={false} />
              
              <div className="mt-6">
                <SocialShare
                  url={`/blog/${post.slug}`}
                  title={post.title}
                  description={post.excerpt}
                />
              </div>
            </header>

            <MDXContent html={contentHtml} />
            
            <RelatedPosts posts={relatedPosts} />

            <div className="border-t border-gray-200 pt-12 mb-12">
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-10 text-center shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Operations?
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  See how Appello can help your ICI contracting business.
                </p>
                <Button 
                  href="https://meetings.hubspot.com/shelson/appello-demo"
                  className="bg-white text-primary hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all"
                >
                  Book a Free Demo
                </Button>
              </div>
            </div>
              </div>
              
              {/* Table of Contents Sidebar */}
              <div className="lg:col-span-1">
                <TableOfContents items={tocItems} />
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}


