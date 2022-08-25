import Head from "next/head";
import { getReadingTable, getPlayingTable } from "../lib/getAirbnbData";
import PageLayout from "../components/PageLayout";
import ItemList from "../components/ItemList";
import ArrowLink from "../components/ArrowLink";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import BlogSVG from "../public/BlogSVG.svg";

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
              <div className="hidden md:block">
                <div className="mb-2 bg-background-accent-dark py-0.5 px-2 text-center font-accent text-xs text-text-accent-weak/70">
                  6<span className="px-1 text-text-accent-weak/40">/</span>27
                  <span className="px-1 text-text-accent-weak/40">/</span>22
                </div>
                <div className="grid grid-cols-3 grid-rows-2 gap-2 font-accent text-xs font-bold text-text-muted">
                  <div>DEV</div>
                  <div>ES</div>
                  <div>L</div>
                  <div>364</div>
                  <div>32</div>
                </div>
              </div>
              <div className="mb-14 max-w-2xl md:mb-28 md:ml-8">
                <Link href={`/post/${post.slug}`} scroll={false}>
                  <h3 className="mb-4 font-secondary text-3xl font-bold transition duration-300 ease-in-out hover:cursor-pointer hover:text-accent md:text-5xl">
                    {post.frontmatter.Title}
                  </h3>
                </Link>
                <p className="mb-4 font-primary leading-relaxed">
                  Quisque egestas diam in arcu cursus. Morbi tristique senectus
                  et netus et malesuada fames ac. Ullamcorper morbi tincidunt
                  ornare massa eget egestas purus. Nunc sed blandit libero
                  volutpat sed cras ornare arcu. Viverra suspendisse potenti
                  nullam ac. Sit amet nisl suscipit adipiscing. Congue nisi
                  vitae suscipit tellus mauris a. Lectus urna duis convallis
                  convallis tellus id interdum velit. Egestas quis ipsum
                  suspendisse ultrices gravida dictum.
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
