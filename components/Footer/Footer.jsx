import React from "react";
import Link from "next/link";
import ArrowLink from "../ArrowLink";
import ArrowIcon from "../ArrowLink/Arrow.svg";

function Footer() {
  return (
    <footer className="md:text-1xl border-t border-t-background-accent-dark p-4 font-accent text-lg font-bold uppercase tracking-widest text-background-accent-neutral md:py-6 md:pl-14">
      <div className="">
        <div>
          <ul className="flex flex-wrap gap-4 md:gap-12">
            <li className="flex items-center gap-2 md:gap-3">
              <ArrowIcon className="h-4  md:h-4" />
              <Link href="/">
                <a className="">Home</a>
              </Link>
            </li>
            <li className="flex items-center gap-2 md:gap-3">
              <ArrowIcon className="h-4  md:h-4" />
              <a href="https://github.com/danhannigan" className=" ">
                Github
              </a>
            </li>
            <li className="flex items-center gap-2 md:gap-3">
              <ArrowIcon className="h-4  md:h-4" />
              <a href="https://twitter.com/danhannigan" className="">
                Twitter
              </a>
            </li>
            <li className="flex items-center gap-2 md:gap-3">
              <ArrowIcon className="h-4  md:h-4" />
              <a href="https://www.linkedin.com/in/danhannigan/" className="">
                Linkedin
              </a>
            </li>
            <li className="flex items-center gap-2 md:gap-3">
              <ArrowIcon className="h-4  md:h-4" />
              <a href="https://www.polywork.com/danhannigan" className="">
                Polywork
              </a>
            </li>
          </ul>
          <div className="mt-3 text-xs">
            Copyright Dan Hannigan 2022. Built with Next.js, Tailwind, and
            Airtable
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
