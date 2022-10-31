import React from "react";
import format from "date-fns/format";

function PostMeta({ data }) {
  return (
    <div className="flex flex-col">
      <div className="mb-2 w-[112px] flex-auto bg-background-accent-dark py-1  text-center font-accent text-xs font-bold leading-none tracking-widest text-text-accent-weak/60">
        {format(new Date(data.published_at), "MM / dd / yy")}
      </div>
      <div className="mx-auto grid grid-cols-3 grid-rows-2 gap-2 font-accent text-xs font-bold text-text-muted">
        {data.tags?.map((tag) => (
          <div key={`${tag}-${tag.id}`}>{tag.name}</div>
        ))}
        {/* <div>{data.words}</div> */}
        <div>{data.reading_time * 60}</div>
      </div>
    </div>
  );
}

export default PostMeta;
