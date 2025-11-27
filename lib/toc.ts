export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function generateTOC(html: string): TOCItem[] {
  const toc: TOCItem[] = [];
  const headingRegex = /<h([1-4])[^>]*id="([^"]+)"[^>]*>(.*?)<\/h[1-4]>/g;
  
  let match;
  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1], 10);
    const id = match[2];
    // Remove HTML tags including the anchor link with hash tag
    let text = match[3].replace(/<a[^>]*>#<\/a>/g, '').replace(/<[^>]*>/g, '').trim();
    
    toc.push({ id, text, level });
  }
  
  return toc;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
}


