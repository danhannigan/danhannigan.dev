import React from "react";
import Nav from "../Nav/Nav";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed z-50 block h-10 min-w-full bg-white/70 py-2 backdrop-blur-lg dark:bg-slate-800/70">
      <div className="container mx-auto flex max-w-prose justify-between px-4 xl:px-0">
        <div className="hidden lg:block">
          <Link href="/">
            <a>
              <h1 className="font-bold text-black dark:text-white lg:block">
                Dan Hannigan
              </h1>
            </a>
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
