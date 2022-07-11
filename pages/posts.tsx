import React from "react";
import fs from "fs";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import matter from "gray-matter";
import PageLayout from "../layouts/PageLayout";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

const Posts = ({ posts }) => {
  return (
    <PageLayout>
      <Head>
        <title>Dan Hannigan - Posts</title>
      </Head>
      <div className="grid grid-cols-1 p-4 md:grid-cols-3 md:p-0 lg:grid-cols-4">
        {posts.map(({ slug, frontmatter }) => (
          <div
            key={slug}
            className="m-2 flex flex-col overflow-hidden rounded-xl border border-gray-200 shadow-lg"
          >
            <Link href={`/post/${slug}`}>
              <a>
                <Image
                  width={650}
                  height={340}
                  alt={frontmatter.title}
                  src={`/${frontmatter.socialImage}`}
                  unoptimized={true}
                />
                <h1 className="p-4">{frontmatter.title}</h1>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Posts;
