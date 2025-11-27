# MDX Content Guide

This guide explains how to use all the features available in your MDX blog posts and case studies.

## Headings

All heading levels are supported and properly styled:

```markdown
# H1 Heading (Large, with bottom border)
## H2 Heading (Medium, great for sections)
### H3 Heading (Smaller, for subsections)
#### H4 Heading (Even smaller)
```

**Styling:**
- H1: Large (3xl), bold, with bottom border separator
- H2: Medium (2xl), bold, with proper spacing
- H3: Smaller (xl), bold, with proper spacing
- H4: Small (lg), bold

## Lists

### Bullet Points (Unordered Lists)

```markdown
- First item
- Second item
  - Nested item
  - Another nested item
- Third item
```

### Numbered Lists (Ordered Lists)

```markdown
1. First step
2. Second step
3. Third step
```

**Styling:**
- Proper indentation and spacing
- Colored markers (primary blue)
- Nested lists supported

## Quotes (Blockquotes)

```markdown
> This is a blockquote. Use it to highlight important information,
> quotes, or callouts.
```

**Styling:**
- Left border (primary blue)
- Light blue background
- Italic text
- Proper padding and spacing

## Links

```markdown
[Link Text](https://example.com)
```

**Styling:**
- Primary blue color
- Underline on hover
- Smooth transitions

## Images

### External Images

```markdown
![Alt text](https://example.com/image.jpg)
```

### Local Images

Place images in the `public/images/blog/` directory:

```markdown
![Alt text](/images/blog/my-image.jpg)
```

**Styling:**
- Rounded corners
- Shadow effects
- Responsive (full width)
- Lazy loading for performance

## Videos

### YouTube Videos

You can embed YouTube videos in two ways:

**Option 1: Just paste the URL**
```markdown
https://www.youtube.com/watch?v=VIDEO_ID
```

**Option 2: As a link**
```markdown
[Watch this video](https://www.youtube.com/watch?v=VIDEO_ID)
```

**Option 3: Short URL**
```markdown
https://youtu.be/VIDEO_ID
```

### Vimeo Videos

```markdown
https://vimeo.com/VIDEO_ID
```

**Styling:**
- Responsive 16:9 aspect ratio
- Rounded corners
- Shadow effects
- Fullscreen support

## Code Blocks

### Inline Code

```markdown
Use `code` for inline code snippets.
```

### Code Blocks

````markdown
```javascript
function example() {
  return "Hello World";
}
```
````

**Styling:**
- Dark background for code blocks
- Light background for inline code
- Syntax highlighting ready
- Proper scrolling for long code

## Tables

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

**Styling:**
- Bordered cells
- Alternating row colors
- Proper padding
- Responsive

## Problem/Solution/Impact Sections

Special styling for structured content:

```markdown
**The Problem:** Describe the problem here.

**The Solution:** Describe the solution here.

**Impact:** Describe the impact here.
```

**Styling:**
- Problem: Red accent box
- Solution: Blue accent box
- Impact: Green accent box
- Each with proper labels and backgrounds

## Horizontal Rules

```markdown
---

Section separator
```

## Best Practices

1. **Use proper heading hierarchy**: Start with H1, then H2, then H3
2. **Add alt text to images**: Always include descriptive alt text
3. **Keep paragraphs short**: 2-3 sentences for better readability
4. **Use lists for multiple items**: Better than long paragraphs
5. **Add spacing**: Use blank lines between sections
6. **Test videos**: Make sure YouTube/Vimeo URLs are correct

## Example Complete Blog Post

```markdown
---
title: "My Blog Post"
slug: "my-blog-post"
date: "2025-01-20"
author: "Your Name"
category: "Product"
excerpt: "A brief description"
---

# Main Title

Introduction paragraph here.

## Section One

Content with **bold text** and *italic text*.

### Subsection

- Bullet point 1
- Bullet point 2

## Section Two

![Image description](/images/blog/example.jpg)

> Important quote or callout

[Link text](https://example.com)

https://www.youtube.com/watch?v=VIDEO_ID

## Conclusion

Final thoughts here.
```

## File Structure

```
content/
  blog/
    your-post.mdx
public/
  images/
    blog/
      your-image.jpg
```

## Need Help?

If you need to add new features or modify styling, check:
- `lib/markdown.ts` - Markdown processing
- `components/blog/MDXContent.tsx` - Content rendering component
- `app/globals.css` - Global styles



