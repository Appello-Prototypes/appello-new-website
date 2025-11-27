import { BlogPost, getAllPosts } from "./blog";

export function getRelatedPosts(
  currentPost: BlogPost,
  limit: number = 3
): BlogPost[] {
  const allPosts = getAllPosts();
  const currentSlug = currentPost.slug;
  
  // Score posts based on relevance
  const scoredPosts = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      let score = 0;
      
      // Category match (high weight)
      if (post.category === currentPost.category) {
        score += 10;
      }
      
      // Tag overlap (medium weight)
      if (currentPost.tags && post.tags) {
        const currentTags = new Set(currentPost.tags);
        const postTags = new Set(post.tags);
        const overlap = Array.from(currentTags).filter((tag) => postTags.has(tag)).length;
        score += overlap * 5;
      }
      
      // Featured posts get a small boost
      if (post.featured) {
        score += 2;
      }
      
      return { post, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
  
  // If we don't have enough related posts, fill with recent posts
  if (scoredPosts.length < limit) {
    const recentPosts = allPosts
      .filter((post) => post.slug !== currentSlug && !scoredPosts.find((p) => p.slug === post.slug))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit - scoredPosts.length);
    
    return [...scoredPosts, ...recentPosts];
  }
  
  return scoredPosts;
}

