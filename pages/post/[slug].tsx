import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import PostMeta from "../../components/PostMeta";
import BlogSVG from "../../public/BLOG.svg";
import { motion } from "framer-motion";
import { getGhostPosts, getPostBySlug } from "../../lib/getGhostPosts";
import { getWebMentions } from "../../lib/getWebMentions";
import Image from "next/image";

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

export default function PostPage({ data, wmLikes, wmComments }) {
  return (
    <PageLayout
      title={`${data.title} - Blog`}
      description={data.custom_excerpt || data.excerpt}
      image={[
        {
          url:
            data.feature_image ||
            "https://danhannigan.dev/images/danhannigan-og-image-2022.png",
          width: 1200,
          height: 675,
          alt: data.title,
        },
      ]}
    >
      <div className="relative flex flex-row">
        <div className="absolute -mt-16 hidden h-full w-[240px] border-r border-background-accent-dark pb-20 pl-14 text-center md:block">
          <motion.div
            animate="in"
            exit="out"
            variants={variants}
            className="sticky top-52 z-10 block w-[140px] flex-auto bg-background-default text-center text-background-accent-neutral"
          >
            <BlogSVG />
            <Link href="/" scroll={false}>
              <a className="font-primary text-sm font-bold text-accent visited:text-accent">
                Back
              </a>
            </Link>
          </motion.div>
        </div>
        <article className="flex border-b border-background-accent-dark md:pl-[270px]">
          <motion.div
            className="md:flex"
            animate="in"
            exit="out"
            variants={variants}
          >
            <section className="md:block md:pt-44">
              <div className="hidden flex-shrink-0 md:block md:pt-10">
                <PostMeta data={{ ...data }} />
              </div>
            </section>
            <section className="max-w-2xl border-l border-r border-background-accent-dark p-4 md:ml-6 md:border-r-0 md:p-10">
              <h3 className="mb-8 pt-20 font-secondary text-4xl font-bold md:pt-44 md:text-5xl">
                {data.title}
              </h3>
              <div
                dangerouslySetInnerHTML={{ __html: data.html }}
                className="prose prose-invert prose-headings:font-secondary prose-p:font-primary prose-a:text-accent prose-blockquote:border-background-accent-dark prose-hr:border-background-accent-dark md:prose-base"
              />
              <div className="mt-8 border-t border-background-accent-dark pt-4">
                {wmLikes.length > 0 && (
                  <h4 className="font-secondary text-background-accent-neutral">
                    {wmLikes.length} Like{wmLikes.length > 1 ? "s" : ""}
                  </h4>
                )}
                <ul className="mt-4 flex flex-wrap">
                  {wmLikes.map((like) => (
                    <li
                      key={like.id}
                      className="mr-2 mb-2 h-10 w-10 overflow-hidden rounded-full"
                    >
                      <Image
                        loader={() => like.author.photo}
                        src={like.author.photo}
                        width="40px"
                        height="40px"
                        alt={like.author.name}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 border-t border-background-accent-dark pt-4">
                {wmComments.length > 0 && (
                  <h4 className="font-secondary text-background-accent-neutral">
                    Comments
                  </h4>
                )}
                {wmComments.length > 0 && (
                  <ul className="mt-4">
                    {wmComments.map((comment) => (
                      <li key={comment.id} className="mb-4 flex  pb-4">
                        <div className="mr-4 h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            loader={() => comment.author.photo}
                            src={comment.author.photo}
                            width="40px"
                            height="40px"
                            alt={comment.author.name}
                          />
                        </div>
                        <div className="flex flex-col font-secondary ">
                          <div className="mb-1 font-primary text-yellow-600">
                            {comment.author.name}
                          </div>
                          {comment.content?.text && (
                            <div>{comment.content?.text}</div>
                          )}
                          <div className="w-56 border-b border-background-accent-dark pt-4"></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          </motion.div>
        </article>
      </div>
    </PageLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getGhostPosts();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const data = await getPostBySlug(slug);
  const webMentions = await getWebMentions();
  const fullSlug = `https://www.danhannigan.dev/post/${slug}`;
  const wmLikes = webMentions.filter((mention) =>
    fullSlug.includes(mention["like-of"])
  );
  const wmComments = webMentions.filter((mention) =>
    fullSlug.includes(mention["in-reply-to"])
  );
  return { props: { data, wmLikes, wmComments } };
}
