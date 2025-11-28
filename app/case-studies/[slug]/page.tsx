import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/case-studies";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import { markdownToHtml } from "@/lib/markdown";
import MDXContent from "@/components/blog/MDXContent";

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.title} - Appello Case Study`,
    description: caseStudy.excerpt,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.excerpt,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  const contentHtml = await markdownToHtml(caseStudy.content);

  return (
    <main className="min-h-screen">
      <Header />
      
      <article className="bg-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/case-studies"
              className="text-primary hover:text-primary-dark transition-colors mb-8 inline-flex items-center gap-2 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              <span>Back to Case Studies</span>
            </Link>

            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full">
                  {caseStudy.industry}
                </span>
                <span className="text-gray-400">•</span>
                <time dateTime={caseStudy.date} className="text-gray-600">
                  {new Date(caseStudy.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </time>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                {caseStudy.title}
              </h1>
              
              <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                {caseStudy.company}
              </p>
              
              <p className="text-xl text-gray-600 leading-relaxed">{caseStudy.excerpt}</p>
            </header>

            {caseStudy.video && (() => {
              const getVideoId = (url: string): string => {
                const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
                return match ? match[1] : '';
              };
              const videoId = getVideoId(caseStudy.video);
              
              return (
                <div className="mb-12">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-xl border border-gray-200">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`${caseStudy.company} Case Study Video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              );
            })()}

            {caseStudy.results.length > 0 && (
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 md:p-10 mb-12 border border-primary/20 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                  Results
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-primary-dark bg-clip-text text-transparent mb-2">
                        {result.value}
                      </div>
                      <div className="text-gray-700 font-medium">{result.metric}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <MDXContent html={contentHtml} />

            <div className="border-t border-gray-200 pt-12 mb-12">
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-10 text-center shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to See Similar Results?
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  Book a demo to see how Appello can transform your operations.
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
        </div>
      </article>

      <Footer />
    </main>
  );
}


