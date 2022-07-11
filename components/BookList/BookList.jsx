import React from "react";
import Image from "next/image";
import format from "date-fns/format";

function BookList({ data }) {
  return (
    <div className="flex max-w-prose overflow-x-scroll">
      <div className="mr-4  border-r border-r-black/10 pr-4 dark:border-r-white/10">
        {data
          .filter((item) => item.status === "Reading")
          .map((item) => (
            <div className="flex flex-col" key={item.id}>
              <a href={item.url}>
                <div className="relative block h-32 w-24 overflow-hidden rounded-md">
                  <Image
                    loader={() => item.cover[0].url}
                    src={item.cover[0].url}
                    width="96px"
                    height="128px"
                    alt={item.name}
                    unoptimized={true}
                  />
                </div>
              </a>
              <div className="mx-auto">
                <span className="inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                  <svg
                    className="mr-1 h-3 w-3 text-slate-500 dark:text-slate-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
      </div>
      <div className="grid grid-flow-col gap-4">
        {data
          .filter((item) => item.status === "Read")
          .map((item) => (
            <div className="flex flex-col" key={item.id}>
              <a href={item.url}>
                <div className="relative block h-32 w-24 overflow-hidden rounded-md">
                  <Image
                    loader={() => item.cover[0].url}
                    src={item.cover[0].url}
                    width="96px"
                    height="128px"
                    alt={item.name}
                    unoptimized={true}
                  />
                </div>
              </a>
              <div className="mx-auto">
                <span className="inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 h-3 w-3 text-slate-500 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {format(new Date(item.finished), "MMM d")}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default BookList;
