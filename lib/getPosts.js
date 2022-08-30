import fs from "fs";
import readingTime from "reading-time";
import matter from "gray-matter";

export function getPosts() {
  const files = fs.readdirSync("posts");

  const posts = files
    .map((fileName) => {
      const slug = fileName.replace(".mdx", "");
      const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
      const { data: frontmatter } = matter(readFile);
      return {
        slug,
        frontmatter,
        readingTime: readingTime(readFile),
      };
    })
    .filter((post) => post.frontmatter.published !== false)
    .sort((a, b) => {
      if (a.frontmatter.publishedAt > b.frontmatter.publishedAt) return 1;
      if (a.frontmatter.publishedAt < b.frontmatter.publishedAt) return -1;

      return 0;
    })
    .reverse();

  return posts;
}
