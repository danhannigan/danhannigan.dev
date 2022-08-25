import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import BlogSVG from "../../public/BlogSVG.svg";

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

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.mdx`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <PageLayout>
      <div className="relative mt-36 px-4 md:flex md:flex-row md:px-14">
        <div className="hidden w-[140px] text-center md:block">
          <div className="sticky top-20 text-background-accent-neutral">
            <BlogSVG />
            <Link href="/" scroll={false}>
              <a className="font-primary text-sm font-bold text-accent visited:text-accent">
                Back
              </a>
            </Link>
          </div>
        </div>
        <article className="md:ml-12">
          <div className="md:flex">
            <section className="hidden md:block">
              <div className="sticky top-20">
                <time
                  className="mb-2 block bg-background-accent-dark py-0.5 px-2 text-center font-accent text-xs text-text-accent-weak/70"
                  dateTime="2022-06-22 19:00"
                >
                  6<span className="px-1 text-text-accent-weak/40">/</span>27
                  <span className="px-1 text-text-accent-weak/40">/</span>22
                </time>
                <div className="grid grid-cols-3 grid-rows-2 gap-2 font-accent text-xs font-bold text-text-muted">
                  <div>DEV</div>
                  <div>ES</div>
                  <div>L</div>
                  <div>364</div>
                  <div>32</div>
                </div>
              </div>
            </section>
            <section className="mb-28 max-w-2xl md:ml-8 md:px-0">
              <h3 className="mb-4 font-secondary text-5xl font-bold">
                {frontmatter.Title}
              </h3>
              <div
                dangerouslySetInnerHTML={{ __html: md().render(content) }}
                className="prose prose-invert prose-headings:font-secondary prose-p:font-primary prose-a:text-accent prose-blockquote:border-background-accent-dark prose-hr:border-background-accent-dark md:prose-base"
              />
            </section>
          </div>
        </article>
      </div>
    </PageLayout>
  );
}
