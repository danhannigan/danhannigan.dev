import { getReadingTable, getPlayingTable } from "../lib/getAirbnbData";
import { getPosts } from "../lib/getPosts";
import generateRSS from "../lib/generateRSSFeed";
import { motion } from "framer-motion";

import PageLayout from "../components/PageLayout";
import ItemList from "../components/ItemList";
import PostSnippet from "../components/PostSnippet";
import BlogSVG from "../public/BlogSVG.svg";

export default function Home({ readingTable, playingTable, posts }) {
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
    >
      <div className=" mt-32 flex flex-row px-4 md:mt-56 md:px-14">
        <div className="hidden w-[140px] text-center md:block">
          <motion.div
            animate="in"
            exit="out"
            variants={variants}
            className="sticky top-36 block w-[140px] flex-auto text-center text-white"
          >
            <BlogSVG />
          </motion.div>
        </div>
        <motion.div
          animate="in"
          exit="out"
          variants={variants}
          className="md:ml-20"
        >
          {posts.map((post) => (
            <PostSnippet data={post} key={post.slug} />
          ))}
        </motion.div>
      </div>
      <div className="mt-12 flex flex-col gap-10 bg-background-dark py-20 md:mt-24">
        <ItemList data={readingTable} type={"read"} />
        <ItemList data={playingTable} type={"play"} />
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  await generateRSS();
  const posts = getPosts();

  return {
    props: {
      readingTable: await getReadingTable(),
      playingTable: await getPlayingTable(),
      posts,
    },
  };
}
