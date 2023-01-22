import React from "react";
import Image from "next/image";
import format from "date-fns/format";

import Read2023 from "../../public/READ-2023.svg";
import Play2023 from "../../public/PLAY-2023.svg";
import Read2022 from "../../public/READ-2022.svg";
import Play2022 from "../../public/PLAY-2022.svg";

function ItemList({ type, data, year }) {
  return (
    <div className="relative min-h-[184.5px] bg-background-dark">
      <div className="absolute z-20 mr-12 -mt-5 bg-background-dark/70 pl-4 pb-20 pt-5 backdrop-blur-md md:pl-14">
        <div className="block w-[140px] flex-auto text-center">
          {/* lol this is so bad */}
          {year === "2023" && type === "read" && <Read2023 />}
          {year === "2023" && type === "play" && <Play2023 />}
          {year === "2022" && type === "read" && <Read2022 />}
          {year === "2022" && type === "play" && <Play2022 />}
        </div>
      </div>

      <div className="scroll no-scrollbar flex min-h-[184px] gap-9 overflow-x-scroll pl-[192px] md:pl-[276px]">
        {data.map((item) => (
          <div className="flex flex-col" key={item.id}>
            <a href={item.url}>
              <div className="relative block h-44 w-28 border-[5px] border-background-accent-dark p-2">
                <Image
                  loader={() => item.imageURL}
                  src={item.imageURL}
                  layout="fill"
                  objectFit="cover"
                  alt={item.name}
                  unoptimized={true}
                />
              </div>
            </a>
            <div className="z-10 -mt-4 text-center">
              {(item.status === "Reading" || item.status === "Playing") && (
                <span className="inline-flex items-center bg-accent px-2.5 py-0.5 font-accent text-xs font-bold uppercase tracking-wide text-black">
                  {item.status}
                </span>
              )}
              {type === "read" && item.status !== "Reading" && (
                <span className="inline-flex items-center bg-background-accent-dark px-2.5 py-1 font-accent text-xs font-bold leading-none tracking-widest text-white/60">
                  {format(new Date(item.finished), "MM / dd")}
                </span>
              )}
            </div>
          </div>
        ))}
        {data.length === 0 && (
          <div className="text-md flex h-44 w-28 items-center border-[5px] border-background-accent-dark p-2 text-center font-bold uppercase text-background-accent-neutral">
            Nothing yet
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemList;
