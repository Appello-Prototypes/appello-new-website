interface MDXContentProps {
  html: string;
}

export default function MDXContent({ html }: MDXContentProps) {
  // Process newsletter blocks first
  let processedHtml = html.replace(
    /<div class="newsletter-cta-wrapper" data-newsletter-content="([^"]*)"><\/div>/g,
    (match, content) => {
      const decodedContent = content.replace(/&quot;/g, '"');
      const lines = decodedContent.split('\n').filter((l: string) => l.trim());
      const title = lines[0] || 'Stay Updated';
      const description = lines.slice(1).join(' ') || 'Get the latest insights delivered to your inbox.';
      
      return `
        <div class="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 md:p-10 my-8 text-center shadow-lg">
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">${title}</h3>
          <p class="text-lg text-white/90 mb-6 max-w-2xl mx-auto">${description}</p>
          <div class="max-w-md mx-auto">
            <a href="https://meetings.hubspot.com/shelson/appello-demo" class="inline-block px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-lg">
              Subscribe
            </a>
          </div>
        </div>
      `;
    }
  );
  
  // Process callouts - replace wrapper divs with styled callouts
  processedHtml = processedHtml.replace(
    /<div class="callout-wrapper" data-callout-type="(\w+)">([\s\S]*?)<\/div>/g,
    (match, type, content) => {
      const validTypes = ['note', 'warning', 'tip', 'info'];
      if (!validTypes.includes(type)) {
        return match;
      }
      
      // Create styled callout HTML
      const styles = {
        note: {
          container: 'bg-blue-50 border-l-4 border-blue-500',
          icon: 'text-blue-600',
          title: 'text-blue-900',
          label: 'Note',
        },
        warning: {
          container: 'bg-yellow-50 border-l-4 border-yellow-500',
          icon: 'text-yellow-600',
          title: 'text-yellow-900',
          label: 'Warning',
        },
        tip: {
          container: 'bg-green-50 border-l-4 border-green-500',
          icon: 'text-green-600',
          title: 'text-green-900',
          label: 'Tip',
        },
        info: {
          container: 'bg-purple-50 border-l-4 border-purple-500',
          icon: 'text-purple-600',
          title: 'text-purple-900',
          label: 'Info',
        },
      };
      
      const style = styles[type as keyof typeof styles];
      const iconSvg = type === 'note' || type === 'info' 
        ? '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg>'
        : type === 'warning'
        ? '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>'
        : '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>';
      
      return `
        <div class="${style.container} rounded-r-lg p-4 my-6 shadow-sm">
          <div class="flex items-start gap-3">
            <div class="${style.icon} flex-shrink-0 mt-0.5">
              ${iconSvg}
            </div>
            <div class="flex-1 min-w-0">
              <div class="${style.title} font-semibold text-sm uppercase tracking-wide mb-2">
                ${style.label}
              </div>
              <div class="text-gray-800 prose prose-sm max-w-none">
                ${content}
              </div>
            </div>
          </div>
        </div>
      `;
    }
  );

  return (
    <div
      className="prose prose-lg prose-slate max-w-none mb-16
        prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
        prose-h1:text-3xl prose-h1:mt-12 prose-h1:mb-6 prose-h1:border-b prose-h1:border-gray-200 prose-h1:pb-4
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-gray-900 prose-h2:scroll-mt-20
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-gray-900 prose-h3:scroll-mt-20
        prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-2 prose-h4:text-gray-900
        prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
        prose-ul:my-6 prose-ul:space-y-2 prose-ul:pl-6 prose-ul:list-disc
        prose-ol:my-6 prose-ol:space-y-2 prose-ol:pl-6 prose-ol:list-decimal
        prose-li:text-gray-700 prose-li:leading-relaxed prose-li:marker:text-primary prose-li:pl-2
        prose-strong:text-gray-900 prose-strong:font-semibold
        prose-a:text-primary prose-a:no-underline prose-a:font-medium hover:prose-a:text-primary-dark hover:prose-a:underline
        prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:pr-4 prose-blockquote:py-4 prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:my-8 prose-blockquote:not-italic prose-blockquote:font-normal
        prose-code:text-sm prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-gray-800 prose-code:font-mono prose-code:before:content-[''] prose-code:after:content-['']
        prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto prose-pre:my-6 prose-pre:shadow-lg
        prose-img:rounded-lg prose-img:shadow-md prose-img:my-8 prose-img:w-full prose-img:h-auto
        prose-hr:border-gray-200 prose-hr:my-12 prose-hr:border-t-2
        prose-table:w-full prose-table:my-8 prose-table:border-collapse
        prose-th:border prose-th:border-gray-300 prose-th:bg-gray-50 prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-semibold
        prose-td:border prose-td:border-gray-300 prose-td:px-4 prose-td:py-2
        prose-video:w-full prose-video:rounded-lg prose-video:my-8"
      dangerouslySetInnerHTML={{ __html: processedHtml }}
    />
  );
}

