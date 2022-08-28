import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import PostMeta from "../../components/PostMeta";
import BlogSVG from "../../public/BlogSVG.svg";
import readingTime from "reading-time";
import { motion } from "framer-motion";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

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

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.mdx`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
      readingTime: readingTime(fileName),
    },
  };
}

export default function PostPage({ frontmatter, readingTime, content }) {
  return (
    <PageLayout
      title={`${frontmatter.title} - Blog`}
      description={frontmatter.summary}
    >
      <div className="relative mt-32 px-4 md:mt-56 md:flex md:flex-row md:px-14">
        <div className="hidden w-[140px] text-center md:block">
          <motion.div
            animate="in"
            exit="out"
            variants={variants}
            className="sticky top-36 w-[140px] text-background-accent-neutral"
          >
            <BlogSVG />
            <Link href="/" scroll={false}>
              <a className="font-primary text-sm font-bold text-accent visited:text-accent">
                Back
              </a>
            </Link>
          </motion.div>
        </div>
        <article className="md:ml-20">
          <motion.div
            className="md:flex"
            animate="in"
            exit="out"
            variants={variants}
          >
            <section className="md:block">
              <div className="mb-8 w-28 md:sticky md:top-36 md:mb-0">
                <PostMeta data={{ ...frontmatter, ...readingTime }} />
              </div>
            </section>
            <section className="mb-28 max-w-2xl md:ml-12 md:px-0">
              <h3 className="mb-8 font-secondary text-4xl font-bold md:text-5xl">
                {frontmatter.title}
              </h3>
              <div
                dangerouslySetInnerHTML={{ __html: md().render(content) }}
                className="prose prose-sm prose-invert prose-headings:font-secondary prose-p:font-primary prose-a:text-accent prose-blockquote:border-background-accent-dark prose-hr:border-background-accent-dark md:prose-base"
              />
            </section>
          </motion.div>
        </article>
      </div>
    </PageLayout>
  );
}
