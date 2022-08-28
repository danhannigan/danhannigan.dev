import React from "react";
import PostMeta from "../PostMeta";
import ArrowLink from "../ArrowLink";
import Link from "next/link";

function PostSnippet({ data }) {
  return (
    <div className="flex" key={data.slug}>
      <div className="flex-shrink-0 md:block">
        <PostMeta data={{ ...data.frontmatter, ...data.readingTime }} />
      </div>
      <div className="mb-14 ml-8 max-w-2xl md:mb-28 md:ml-12">
        <Link href={`/post/${data.slug}`} scroll={false}>
          <h3 className="mb-4 font-secondary text-xl font-bold transition duration-300 ease-in-out hover:cursor-pointer hover:text-accent md:text-5xl">
            {data.frontmatter.title}
          </h3>
        </Link>
        <p className="mb-4 font-primary text-sm leading-relaxed">
          {data.frontmatter.summary}
        </p>
        <ArrowLink
          href={`/post/${data.slug}`}
          iconPosition={"right"}
          text={"Read More"}
        />
      </div>
    </div>
  );
}

export default PostSnippet;
