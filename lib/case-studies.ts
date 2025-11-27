import fs from "fs";
import path from "path";
import matter from "gray-matter";

const caseStudiesDirectory = path.join(process.cwd(), "content/case-studies");

export interface CaseStudy {
  slug: string;
  title: string;
  company: string;
  industry: string;
  date: string;
  excerpt: string;
  results: {
    metric: string;
    value: string;
  }[];
  content: string;
  featured?: boolean;
}

export function getAllCaseStudies(): CaseStudy[] {
  if (!fs.existsSync(caseStudiesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(caseStudiesDirectory);
  const allCaseStudies = fileNames
    .filter((name) => name.endsWith(".mdx") || name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.(mdx|md)$/, "");
      const fullPath = path.join(caseStudiesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        company: data.company || "",
        industry: data.industry || "",
        date: data.date || "",
        excerpt: data.excerpt || "",
        results: data.results || [],
        content,
        featured: data.featured || false,
      };
    });

  return allCaseStudies.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const caseStudies = getAllCaseStudies();
  return caseStudies.find((cs) => cs.slug === slug) || null;
}

export function getCaseStudiesByIndustry(industry: string): CaseStudy[] {
  return getAllCaseStudies().filter((cs) => cs.industry === industry);
}


