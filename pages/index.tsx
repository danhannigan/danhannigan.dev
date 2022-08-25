import { getReadingTable, getPlayingTable } from "../lib/getAirbnbData";
import { getPosts } from "../lib/getPosts";
import generateRSS from "../lib/generateRSSFeed";

import PageLayout from "../components/PageLayout";
import ItemList from "../components/ItemList";
import PostSnippet from "../components/PostSnippet";
import BlogSVG from "../public/BlogSVG.svg";

export default function Home({ readingTable, playingTable, posts }) {
  return (
    <PageLayout
      title="Hi, I'm Dan"
      description="A front end developer, designer, and community leader in Denver, Colorado."
    >
      <div className="mt-36 flex flex-row px-4 md:px-14">
        <div className="hidden w-[140px] text-center md:block">
          <div className="sticky top-36 block w-[140px] flex-auto text-center text-white">
            <BlogSVG />
          </div>
        </div>
        <div className="md:ml-12">
          {posts.map((post) => (
            <PostSnippet data={post} key={post.slug} />
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
