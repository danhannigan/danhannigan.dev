import Head from "next/head";
import { getReadingTable, getPlayingTable } from "../lib/getAirbnbData";
import PageLayout from "../components/PageLayout";
import ItemList from "../components/ItemList";
import ArrowLink from "../components/ArrowLink";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export default function Home({ readingTable, playingTable, posts }) {
  return (
    <PageLayout>
      <Head>
        <title>Dan Hannigan - Denver, Colorado Frontend Developer</title>
      </Head>
      <div className="mt-36 flex flex-row px-4 md:px-14">
        <div className="hidden w-[140px] text-center md:block">
          <div className="sticky top-36">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 180 224"
            >
              <path
                stroke="#F5F5F5"
                strokeWidth="5"
                d="M2.5 2.5h175v219H2.5z"
              />
              <path
                d="M88.544 95.008c0 4.736-1.685 8.085-5.056 10.048C80.16 107.019 75.765 108 70.304 108h-14.72V63.648h14.08c5.077 0 9.173.896 12.288 2.688 3.115 1.75 4.672 4.63 4.672 8.64 0 2.517-.768 4.587-2.304 6.208-1.536 1.621-3.477 2.73-5.824 3.328 2.816.47 5.184 1.536 7.104 3.2 1.963 1.621 2.944 4.053 2.944 7.296Zm-12.48-18.944c0-1.75-.555-3.008-1.664-3.776-1.067-.81-2.773-1.216-5.12-1.216h-3.2v10.304h3.584c2.219 0 3.84-.405 4.864-1.216 1.024-.853 1.536-2.219 1.536-4.096Zm1.664 18.496c0-2.219-.64-3.797-1.92-4.736-1.237-.939-3.05-1.408-5.44-1.408H66.08v11.904h3.84c2.432 0 4.33-.405 5.696-1.216 1.408-.81 2.112-2.325 2.112-4.544Zm18.599-30.912h10.496V99.68h19.2l-1.024 8.32H96.327V63.648Zm-7.399 73.144c0 7.211-1.536 12.907-4.608 17.088-3.03 4.139-7.403 6.208-13.12 6.208-5.76 0-10.155-2.048-13.184-6.144-3.03-4.139-4.544-9.856-4.544-17.152 0-7.211 1.515-12.885 4.544-17.024 3.072-4.181 7.467-6.272 13.184-6.272 5.76 0 10.155 2.069 13.184 6.208 3.03 4.096 4.544 9.792 4.544 17.088Zm-10.752 0c0-5.461-.555-9.429-1.664-11.904-1.067-2.475-2.837-3.712-5.312-3.712s-4.267 1.237-5.376 3.712c-1.067 2.475-1.6 6.443-1.6 11.904s.533 9.429 1.6 11.904c1.11 2.475 2.901 3.712 5.376 3.712 2.517 0 4.31-1.237 5.376-3.712 1.067-2.475 1.6-6.443 1.6-11.904Zm33.063 23.296c-6.315 0-11.136-1.984-14.464-5.952-3.285-4.011-4.928-9.813-4.928-17.408 0-4.907.896-9.109 2.688-12.608 1.792-3.499 4.245-6.144 7.36-7.936 3.157-1.792 6.677-2.688 10.56-2.688 3.029 0 5.653.491 7.872 1.472 2.261.939 4.331 2.283 6.208 4.032l-5.504 5.696c-1.408-1.237-2.731-2.133-3.968-2.688-1.195-.555-2.56-.832-4.096-.832-3.2 0-5.717 1.28-7.552 3.84-1.835 2.517-2.752 6.443-2.752 11.776 0 5.717.683 9.749 2.048 12.096 1.365 2.347 3.563 3.52 6.592 3.52 2.005 0 3.84-.448 5.504-1.344v-10.176h-5.568l-1.024-7.296h16.512v22.016c-4.864 2.987-10.027 4.48-15.488 4.48Z"
                fill="#fff"
              />
            </svg>
            {/* <a href="#" className=" font-primary text-sm font-bold text-accent">
              View Archive
            </a> */}
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
