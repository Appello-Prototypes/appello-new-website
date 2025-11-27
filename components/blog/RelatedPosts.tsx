import Link from "next/link";
import { BlogPost } from "@/lib/blog";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="border-t border-gray-200 pt-12 mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary/20 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
              <span className="px-2 py-1 bg-primary/10 text-primary font-semibold rounded text-xs">
                {post.category}
              </span>
              {post.readingTime && (
                <span className="text-gray-500">{post.readingTime} min read</span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}


