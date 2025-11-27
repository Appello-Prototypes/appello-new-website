import fs from "fs";
import path from "path";

export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const authorsDirectory = path.join(process.cwd(), "content/authors");

export function getAllAuthors(): Author[] {
  if (!fs.existsSync(authorsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(authorsDirectory);
  const authors: Author[] = [];

  fileNames.forEach((fileName) => {
    if (fileName.endsWith(".json")) {
      const fullPath = path.join(authorsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const author = JSON.parse(fileContents);
      authors.push(author);
    }
  });

  return authors;
}

export function getAuthorBySlug(slug: string): Author | null {
  const authors = getAllAuthors();
  return authors.find((author) => author.slug === slug) || null;
}

export function getAuthorByName(name: string): Author | null {
  const authors = getAllAuthors();
  return authors.find((author) => author.name === name) || null;
}


