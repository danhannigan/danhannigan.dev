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
      image=""
    >
      <div className="relative flex flex-row md:pt-16">
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
          {posts.map((post) => (
            <PostSnippet data={post} key={post.slug} />
          ))}
        </motion.div>
      </div>
      <div className=" flex flex-col gap-10 bg-background-dark py-20">
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
