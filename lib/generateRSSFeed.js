// The creation of this snagged straight from: https://dev.to/j471n/how-to-add-rss-feed-in-nextjs-blog-34j1

import fs from "fs";
import { Feed } from "feed";
import { getGhostPosts } from "./getGhostPosts";

export default async function generateRssFeed() {
  const posts = await getGhostPosts();
  const siteURL = "https://danhannigan.dev";
  const date = new Date();
  const author = {
    name: "Dan Hannigan",
    email: "hi@danhannigan.dev",
    link: "https://twitter.com/danhannigan",
  };

  const feed = new Feed({
    title: "Dan Hannnigan",
    description:
      "Personal website for Dan Hannigan, front end developer, designer, and community leader in Denver, Colorado.",
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/favicon.ico`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Dan Hannigan`,
    updated: date, // today's date
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`, // xml format
      json: `${siteURL}/rss/feed.json`, // json fromat
    },
    author,
  });

  posts.forEach((post) => {
    const url = `${siteURL}/post/${post.slug}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.custom_excerpt || post.excerpt,
      content: post.html,
      author: [author],
      contributor: [author],
      date: new Date(post.published_at),
    });
  });

  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
}
