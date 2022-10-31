import React from "react";
import PostMeta from "../PostMeta";
import ArrowLink from "../ArrowLink";
import Link from "next/link";

function PostSnippet({ data }) {
  return (
    <div
      className="flex border-b border-background-accent-dark md:pl-[270px]"
      key={data.slug}
    >
      <div className="hidden flex-shrink-0 md:block md:pt-10">
        <PostMeta data={{ ...data }} />
      </div>
      <div className="max-w-2xl border-l border-r border-background-accent-dark p-4 md:ml-6 md:border-r-0 md:p-10">
        <Link href={`/post/${data.slug}`} scroll={false}>
          <h3 className="mb-4 font-secondary text-xl font-bold transition duration-300 ease-in-out hover:cursor-pointer hover:text-accent md:text-5xl">
            {data.title}
          </h3>
        </Link>
        <p className="text mb-4 font-primary leading-7 text-[#d1d5db] first-line:leading-relaxed">
          {data.custom_excerpt || data.excerpt}
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
