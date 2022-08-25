import React from "react";
import Link from "next/link";
import ArrowLink from "../ArrowLink";

function Footer() {
  return (
    <footer className="py-20 pl-14 font-primary text-sm font-bold text-accent">
      <div className="">
        <div className="flex gap-12">
          <div>
            <ul>
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
            <ul>
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
            <ul>
              <li>
                <Link href="/books">
                  <a className="hover:underline">Book List</a>
                </Link>
              </li>
              <li>
                <Link href="/video-games">
                  <a className="hover:underline">Game List</a>
                </Link>
              </li>
              <li>
                <Link href="/board-games">
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
