import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed z-50 block min-w-full border-b border-b-background-accent-dark bg-background-default/70 py-6 px-4 backdrop-blur-md md:px-14">
      <Link href="/" scroll={false}>
        <a>
          <h1 className="font-secondary text-xl font-normal leading-none text-text-default md:pl-0.5">
            Dan Hannigan
          </h1>
        </a>
      </Link>
    </header>
  );
}

export default Header;
