import Fuse from "fuse.js";

export interface SearchablePost {
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  slug: string;
  author: string;
  date: string;
  readingTime?: number;
}

export function createSearchIndex(posts: SearchablePost[]): Fuse<SearchablePost> {
  const fuseOptions = {
    keys: [
      { name: "title", weight: 0.7 },
      { name: "excerpt", weight: 0.3 },
      { name: "category", weight: 0.2 },
      { name: "tags", weight: 0.2 },
    ],
    threshold: 0.3,
    includeScore: true,
  };

  return new Fuse(posts, fuseOptions);
}

export function searchPosts(
  fuse: Fuse<SearchablePost>,
  query: string,
  limit: number = 10
): SearchablePost[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const results = fuse.search(query, { limit });
  return results.map((result) => result.item);
}

