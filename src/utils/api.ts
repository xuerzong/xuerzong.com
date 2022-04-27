import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.resolve(process.cwd(), 'content');
const postsDir = path.resolve(contentDir, '_posts');

export function getProfile() {
  const mePath = path.resolve(contentDir, 'README.md');
  const contents = fs.readFileSync(mePath, 'utf8');
  const { content } = matter(contents);
  return content;
}

export function getPostSlugs() {
  return fs.readdirSync(postsDir);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.resolve(postsDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
