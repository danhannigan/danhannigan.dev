import Head from "next/head";
import { getReadingTable, getPlayingTable } from "../lib/getAirbnbData";
import PageLayout from "../components/PageLayout";
import ItemList from "../components/ItemList";
import ArrowLink from "../components/ArrowLink";
import PostMeta from "../components/PostMeta";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import BlogSVG from "../public/BlogSVG.svg";
import readingTime from "reading-time";

export default function Home({ readingTable, playingTable, posts }) {
  return (
    <PageLayout>
      <Head>
        <title>Dan Hannigan - Denver, Colorado Frontend Developer</title>
      </Head>
      <div className="mt-36 flex flex-row px-4 md:px-14">
        <div className="hidden w-[140px] text-center md:block">
          <div className="sticky top-36 block w-[140px] flex-auto text-center text-white">
            <BlogSVG />
          </div>
        </div>
        <div className="md:ml-12">
          {posts.map((post) => (
            <div key={post.id} className="flex">
              <div className="hidden flex-shrink-0 md:block">
                <PostMeta data={{ ...post.frontmatter, ...post.readingTime }} />
              </div>
              <div className="mb-14 max-w-2xl md:mb-28 md:ml-8">
                <Link href={`/post/${post.slug}`} scroll={false}>
                  <h3 className="mb-4 font-secondary text-3xl font-bold transition duration-300 ease-in-out hover:cursor-pointer hover:text-accent md:text-5xl">
                    {post.frontmatter.title}
                  </h3>
                </Link>
                <p className="mb-4 font-primary leading-relaxed">
                  {post.frontmatter.summary}
                </p>
                <ArrowLink
                  href={`/post/${post.slug}`}
                  iconPosition={"right"}
                  text={"Read More"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-24 flex flex-col gap-10 bg-background-dark py-20">
        <ItemList data={readingTable} type={"read"} />
        <ItemList data={playingTable} type={"play"} />
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
      readingTime: readingTime(readFile),
    };
  });

  return {
    props: {
      readingTable: await getReadingTable(),
      playingTable: await getPlayingTable(),
      posts,
    },
  };
}
