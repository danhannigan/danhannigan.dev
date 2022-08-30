import React from "react";
import Link from "next/link";

import ArrowIcon from "./Arrow.svg";

function ArrowLink({ href, iconPosition, text }) {
  return (
    <div className="inline-flex items-center gap-2 font-primary text-sm font-bold text-accent duration-300 ease-in-out hover:cursor-pointer hover:gap-3 hover:underline  hover:transition-all">
      {iconPosition === "left" && <ArrowIcon className="h-4 text-accent" />}
      <Link href={href} scroll={false}>
        <a className="block">{text}</a>
      </Link>
      {iconPosition === "right" && <ArrowIcon className="h-4 text-accent" />}
    </div>
  );
}

export default ArrowLink;
