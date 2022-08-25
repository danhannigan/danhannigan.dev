import React from "react";
import format from "date-fns/format";

function PostMeta({ data }) {
  return (
    <div className="flex flex-col">
      <div className="mb-2 w-[100px] flex-auto bg-background-accent-dark py-1 px-2 text-center font-accent text-xs font-bold leading-none tracking-widest text-text-accent-weak/60">
        {format(new Date(data.publishedAt), "MM / dd / yy")}
      </div>
      <div className="ml-2 grid grid-cols-3 grid-rows-2 gap-2 font-accent text-xs font-bold text-text-muted">
        {data.tags.map((tag) => (
          <div key={`${tag}-${data.id}`}>{tag}</div>
        ))}
        <div>{data.words}</div>
        <div>{data.minutes}</div>
      </div>
    </div>
  );
}

export default PostMeta;
