import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="flex- fixed z-50 flex min-w-full border-b border-b-background-accent-dark bg-background-default/70 py-6 px-4 backdrop-blur-md md:px-14">
      <Link href="/" scroll={false}>
        <a>
          <h1 className="font-secondary text-xl font-normal leading-none text-text-default md:pl-0.5">
            Dan Hannigan
          </h1>
        </a>
      </Link>
      <Link href="/rss/feed.xml" scroll={false}>
        <a className="ml-auto text-accent" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
            aria-labelledby="rssTitle"
            role="img"
          >
            <title id="rssTitle">RSS Feed Link</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </a>
      </Link>
    </header>
  );
}

export default Header;
