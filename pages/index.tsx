import { getReadingTable, getPlayingTable } from "../lib/getAirtableData";
import { getGhostPosts } from "../lib/getGhostPosts";
import generateRSS from "../lib/generateRSSFeed";
import { motion } from "framer-motion";

import PageLayout from "../components/PageLayout";
import ItemList from "../components/ItemList";
import PostSnippet from "../components/PostSnippet";
import BlogSVG from "../public/BLOG-2023.svg";

import PostMeta from "../components/PostMeta";
import ArrowLink from "../components/ArrowLink";
import Link from "next/link";

export default function Home({ readingTable, playingTable, ghostPosts }) {
  const variants = {
    out: {
      opacity: 0,
      y: 2,
      transition: {
        duration: 0.333,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.333,
      },
    },
  };

  return (
    <PageLayout
      title="Hi, I'm Dan"
      description="A front end developer, designer, and community leader in Denver, Colorado."
      image={[
        {
          url: "https://danhannigan.dev/images/danhannigan-og-image-2022.png",
          width: 800,
          height: 800,
          alt: "Dan Hannigan",
        },
      ]}
    >
      <div className="relative flex min-h-[500px] flex-row md:pt-16">
        <div className="absolute -mt-16 hidden h-full w-[240px] border-r border-background-accent-dark pb-20 pl-14 text-center md:block">
          <motion.div
            animate="in"
            exit="out"
            variants={variants}
            className="sticky top-52 z-10 block w-[140px] flex-auto bg-background-default text-center text-white"
          >
            <BlogSVG />
          </motion.div>
        </div>
        <motion.div
          animate="in"
          exit="out"
          variants={variants}
          className="blog-index flex-grow"
        >
          {ghostPosts.map((post) => (
            <PostSnippet data={post} key={post.slug} />
          ))}
          {ghostPosts.length === 0 && (
            <div className="flex border-b border-background-accent-dark md:pl-[270px]">
              <div className="hidden flex-shrink-0 md:block md:pt-10">
                <div className="w-[112px]"></div>
              </div>
              <div className="max-w-2xl border-l border-r border-background-accent-dark p-4 md:ml-6 md:border-r-0 md:p-10">
                <Link href={`/2022`} scroll={false}>
                  <h3 className="mb-4 font-secondary text-xl font-bold transition duration-300 ease-in-out hover:cursor-pointer hover:text-accent md:text-5xl">
                    Nothing written this year
                  </h3>
                </Link>
                <p className="text mb-4 font-primary leading-7 text-[#d1d5db] first-line:leading-relaxed">
                  Want to look at last year?
                </p>
                <ArrowLink
                  href={`/2022`}
                  iconPosition={"left"}
                  text={"Go Back"}
                />
              </div>
            </div>
          )}
        </motion.div>
      </div>
      <div className=" flex flex-col gap-10 bg-background-dark py-20">
        <ItemList data={readingTable} type={"read"} year="2023" />
        <ItemList data={playingTable} type={"play"} year="2023" />
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  await generateRSS();
  const ghostPosts = await getGhostPosts("published_at:>'2022-12-31 0:0:0'");

  return {
    props: {
      readingTable: await getReadingTable(`{Finished} > "2022-12-31"`),
      playingTable: await getPlayingTable(`{Created} > "2022-12-31"`),
      ghostPosts,
    },
  };
}
