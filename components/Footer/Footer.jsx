import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="mx-auto mb-4 max-w-prose px-4 sm:p-6 xl:px-0">
      <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />

      <div className="">
        <div className="grid grid-cols-3 gap-8 sm:gap-6">
          <div>
            <ul className="text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/">
                  <a className="hover:underline">Home</a>
                </Link>
              </li>
              {/* <li>
                <Link href="/posts">
                  <a className="hover:underline">Posts</a>
                </Link>
              </li>
              <li>
                <Link href="/links">
                  <a className="hover:underline">Links</a>
                </Link>
              </li>
              <li>
                <Link href="/using">
                  <a className="hover:underline">Using</a>
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <ul className="text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href="https://github.com/danhannigan"
                  className="hover:underline "
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/danhannigan"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/danhannigan/"
                  className="hover:underline"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://www.polywork.com/danhannigan"
                  className="hover:underline"
                >
                  Polywork
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/books">
                  <a className="hover:underline">Book List</a>
                </Link>
              </li>
              <li>
                <Link href="video-games">
                  <a className="hover:underline">Game List</a>
                </Link>
              </li>
              <li>
                <Link href="board-games">
                  <a className="hover:underline">Board Game List</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
