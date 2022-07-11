import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="flex">
      <ul className="flex dark:text-white">
        <li className="mr-2 -ml-2 lg:hidden">
          <Link href="/">
            <a className="rounded-md bg-slate-50/10 p-1 px-2 text-sm leading-none backdrop-blur-sm">
              Home
            </a>
          </Link>
        </li>
        {/* <li className="mr-2">
          <Link href="/posts">
            <a className="rounded-md bg-slate-50/10 p-1 px-2 text-sm leading-none backdrop-blur-sm">
              Posts
            </a>
          </Link>
        </li>
        <li className="mr-2">
          <Link href="/links">
            <a className="rounded-md bg-slate-50/10 p-1 px-2 text-sm leading-none backdrop-blur-sm">
              Links
            </a>
          </Link>
        </li>
        <li className="">
          <Link href="/using">
            <a className="rounded-md bg-slate-50/10 p-1 px-2 text-sm leading-none backdrop-blur-sm">
              Using
            </a>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Nav;
