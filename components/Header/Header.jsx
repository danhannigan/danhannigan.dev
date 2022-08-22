import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed z-50 block min-w-full bg-background-default/70 py-2 px-10 backdrop-blur-md md:px-14">
      <Link href="/" scroll={false}>
        <a>
          <h1 className="font-secondary text-xl font-normal text-text-default">
            Dan Hannigan
          </h1>
        </a>
      </Link>
    </header>
  );
}

export default Header;
