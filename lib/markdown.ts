import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkImages from 'remark-images';
import { slugify } from './toc';

export async function markdownToHtml(markdown: string): Promise<string> {
  // Extract callout blocks before markdown processing
  const calloutBlocks: Array<{ id: string; type: string; content: string }> = [];
  let calloutIndex = 0;
  
  const calloutPattern = /:::(\w+)\n([\s\S]*?)\n:::/g;
  let processedMarkdown = markdown.replace(calloutPattern, (match, type, content) => {
    const id = `__CALLOUT_${calloutIndex}__`;
    calloutBlocks.push({ id, type: type.toLowerCase(), content: content.trim() });
    calloutIndex++;
    return `\n\n${id}\n\n`;
  });

  const result = await remark()
    .use(remarkGfm) // GitHub Flavored Markdown support (tables, strikethrough, etc.)
    .use(remarkBreaks) // Convert line breaks to <br>
    .use(remarkImages) // Process images
    .use(remarkHtml, { sanitize: false }) // Convert to HTML
    .process(processedMarkdown);

  let html = result.toString();
  
  // Process callouts synchronously - replace placeholders with processed HTML
  for (const block of calloutBlocks) {
    const placeholder = `<p>${block.id}</p>`;
    if (html.includes(placeholder)) {
      // Process the callout content as markdown
      const processed = await remark()
        .use(remarkGfm)
        .use(remarkBreaks)
        .use(remarkHtml, { sanitize: false })
        .process(block.content);
      
      const contentHtml = processed.toString();
      const calloutHtml = `<div class="callout-wrapper" data-callout-type="${block.type}">${contentHtml}</div>`;
      html = html.replace(placeholder, calloutHtml);
    }
  }
  
  // Enhance Problem/Solution/Impact sections with custom styling
  html = html.replace(
    /<p><strong>The Problem:<\/strong>(.*?)<\/p>/g,
    '<div class="problem-box"><p><strong class="problem-label">The Problem:</strong>$1</p></div>'
  );
  
  html = html.replace(
    /<p><strong>The Solution:<\/strong>(.*?)<\/p>/g,
    '<div class="solution-box"><p><strong class="solution-label">The Solution:</strong>$1</p></div>'
  );
  
  html = html.replace(
    /<p><strong>Impact:<\/strong>(.*?)<\/p>/g,
    '<div class="impact-box"><p><strong class="impact-label">Impact:</strong>$1</p></div>'
  );

  // Process YouTube embeds - handle both markdown links and plain URLs
  html = html.replace(
    /<a href="https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)">([^<]*)<\/a>/g,
    '<div class="video-wrapper my-8"><iframe class="w-full aspect-video rounded-lg shadow-lg" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
  );
  
  // Process standalone YouTube URLs
  html = html.replace(
    /https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/g,
    '<div class="video-wrapper my-8"><iframe class="w-full aspect-video rounded-lg shadow-lg" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
  );

  // Process Vimeo embeds
  html = html.replace(
    /<a href="https?:\/\/(?:www\.)?vimeo\.com\/(\d+)">([^<]*)<\/a>/g,
    '<div class="video-wrapper my-8"><iframe class="w-full aspect-video rounded-lg shadow-lg" src="https://player.vimeo.com/video/$1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>'
  );
  
  html = html.replace(
    /https?:\/\/(?:www\.)?vimeo\.com\/(\d+)/g,
    '<div class="video-wrapper my-8"><iframe class="w-full aspect-video rounded-lg shadow-lg" src="https://player.vimeo.com/video/$1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>'
  );

  // Enhance image tags with better styling
  html = html.replace(
    /<img src="([^"]+)" alt="([^"]*)"(?: title="([^"]*)")?\/?>/g,
    (match, src, alt, title) => {
      // External images
      if (src.startsWith("http")) {
        return `<img src="${src}" alt="${alt || ""}" title="${title || ""}" class="rounded-lg shadow-md my-8 w-full h-auto" loading="lazy" />`;
      }
      // Local images (Next.js will handle these)
      return `<img src="${src}" alt="${alt || ""}" title="${title || ""}" class="rounded-lg shadow-md my-8 w-full h-auto" loading="lazy" />`;
    }
  );

  // Add IDs to headings for TOC and anchor links (only process headings that don't already have IDs)
  html = html.replace(
    /<h([1-4])(?![^>]*id=)([^>]*)>(.*?)<\/h[1-4]>/g,
    (match, level, attrs, content) => {
      // Remove any existing anchor links from content to prevent duplicates
      const cleanContent = content.replace(/<a[^>]*aria-label="Copy link to section"[^>]*>#<\/a>/g, '');
      const text = cleanContent.replace(/<[^>]*>/g, '').trim();
      const id = slugify(text);
      return `<h${level} id="${id}" class="group relative scroll-mt-20 heading-with-anchor"${attrs}>${cleanContent}<a href="#${id}" class="heading-anchor-link" aria-label="Copy link to section">#</a></h${level}>`;
    }
  );

  // Process metrics blocks (:::metrics)
  const metricsPattern = /:::metrics\n([\s\S]*?)\n:::/g;
  html = html.replace(metricsPattern, (match, content) => {
    const lines = content.trim().split('\n').filter((line: string) => line.trim());
    const metrics = lines.map((line: string) => {
      const parts = line.split('|').map((p: string) => p.trim());
      return { value: parts[0] || '', label: parts[1] || '' };
    });
    
    const metricsHtml = metrics.map((metric: { value: string; label: string }) => 
      `<div class="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
        <div class="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-primary-dark bg-clip-text text-transparent mb-2">${metric.value}</div>
        <div class="text-gray-700 font-medium">${metric.label}</div>
      </div>`
    ).join('');
    
    return `<div class="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 md:p-10 my-8 border border-primary/20 shadow-sm">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">${metricsHtml}</div>
    </div>`;
  });

  // Process newsletter blocks (:::newsletter)
  const newsletterPattern = /:::newsletter\n?([\s\S]*?)\n:::/g;
  html = html.replace(newsletterPattern, (match, content) => {
    const text = content.trim();
    return `<div class="newsletter-cta-wrapper" data-newsletter-content="${text.replace(/"/g, '&quot;')}"></div>`;
  });

  return html;
}

