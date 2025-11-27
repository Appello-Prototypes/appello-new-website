import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { Metadata } from "next";
import Card from "@/components/Card";
import SearchBar from "@/components/blog/SearchBar";
import CategoryFilter from "@/components/blog/CategoryFilter";
import { SearchablePost } from "@/lib/search";

export const metadata: Metadata = {
  title: "Blog - Appello | Insights for ICI Trade Contractors",
  description: "Learn best practices, industry insights, and tips for running a successful ICI contracting business. From job costing to crew management.",
  openGraph: {
    title: "Blog - Appello",
    description: "Insights and best practices for ICI trade contractors.",
  },
};

interface BlogPageProps {
  searchParams?: { category?: string };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const selectedCategory = searchParams?.category;
  
  const posts = selectedCategory 
    ? allPosts.filter((post) => post.category === selectedCategory)
    : allPosts;

  // Prepare searchable posts data
  const searchablePosts: SearchablePost[] = allPosts.map((post) => ({
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    tags: post.tags || [],
    slug: post.slug,
    author: post.author,
    date: post.date,
    readingTime: post.readingTime,
  }));

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="bg-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Blog & Resources
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Insights, best practices, and tips for ICI trade contractors
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <SearchBar posts={searchablePosts} />
              </div>
              
              {/* Category Filter */}
              <CategoryFilter categories={categories} currentCategory={selectedCategory} />
            </div>

            {posts.length === 0 ? (
              <div className="max-w-2xl mx-auto text-center py-12">
                <p className="text-gray-600 mb-6">
                  Blog posts coming soon! Check back for insights, best practices, and industry updates.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {posts.map((post) => (
                  <Link 
                    key={post.slug} 
                    href={`/blog/${post.slug}`}
                    className="group"
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 hover:border-primary/20">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-xs">
                            {post.category}
                          </span>
                          <span className="text-gray-500 text-xs">
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        
                        <h2 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        
                        <p className="text-gray-600 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                              <span className="text-white text-xs font-bold">
                                {post.author.charAt(0)}
                              </span>
                            </div>
                            <span className="text-sm text-gray-600 font-medium">
                              {post.author}
                            </span>
                          </div>
                          {post.readingTime && (
                            <span className="text-xs text-gray-500">
                              {post.readingTime} min
                            </span>
                          )}
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
