import Head from "next/head";
import Image from "next/image";
import PageLayout from "../layouts/PageLayout";
import { getReadingTable, getPlayingTable } from "../lib/getAirbnbData";
import BookList from "../components/BookList/BookList";
import PlayingList from "../components/PlayingList/PlayingList";

export default function Home({ readingTable, playingTable }) {
  return (
    <PageLayout>
      <Head>
        <title>Dan Hannigan - Denver, Colorado Frontend Developer</title>
      </Head>
      <div className="prose dark:prose-invert">
        <h2 className="lg:hidden">Hi, I'm Dan</h2>
        <p>
          I've been a front-end developer — occasional designer — in Denver, CO
          since 2011. Over the years I've mostly worked at agencies; such as
          Legwork, Deloitte Digital, and The1stMovement. I left agencies for a
          startup called AirDNA, then after that, I landed at Cisco. My main
          focus there has been on bridging development and design, architecting,
          and maintaining our design system that powers all of Cisco.com.
        </p>

        <p>
          Outside of work I'm a big fan of communities and helping people out.
          I've been running Denver Devs since 2015 and it scratches that helper
          itch. I also like getting outside for a good bike ride, hitting the
          gym, playing far too many video games (Destiny 2), reading nightly til
          I fall asleep, cozying up in a matinee at the Alamo Drafthouse,
          gathering around a table with friends for tabletop games or D&D, or
          just camping out at the bar for a nice cold beer and some laughs.
        </p>

        <h3>Work</h3>
        <ul>
          <li className="font-bold">
            Cisco, Senior Frontend Developer{" "}
            <span className="font-normal text-slate-400">
              &bull; June 2021 — present
            </span>
          </li>
          <li className="font-bold">
            Denver Devs, Community Founder{" "}
            <span className="font-normal text-slate-400">
              &bull; March 2015 — present
            </span>
          </li>
          <li>
            AirDNA, Frontend / UX Engineer{" "}
            <span className="font-normal text-slate-400">
              &bull; 2018 — 2021
            </span>
          </li>
          <li>
            Legwork, Frontend Developer{" "}
            <span className="font-normal text-slate-400">
              &bull; 2018 — 2017
            </span>
          </li>
          <li>
            Deloitte Digital, Frontend Developer{" "}
            <span className="font-normal text-slate-400">&bull; 2017</span>
          </li>
          <li>
            The1stMovement, Frontend Developer{" "}
            <span className="font-normal text-slate-400">
              &bull; 2014 — 2016
            </span>
          </li>
          <li>
            RSW Partners, Frontend Developer &amp; Designer{" "}
            <span className="font-normal text-slate-400">
              &bull; 2011 — 2014
            </span>
          </li>
        </ul>

        <h3>
          Reading <span className="text-slate-400">&bull; 2022</span>
        </h3>
        <BookList data={readingTable} />

        <h3>
          Playing <span className="text-slate-400">&bull; 2022</span>
        </h3>
        <PlayingList data={playingTable} />

        <h3>
          Listening <span className="text-slate-400">&bull; 2022</span>
        </h3>
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          frameBorder="0"
          height="450"
          className="w-full overflow-hidden bg-transparent"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/us/playlist/replay-2022/pl.rp-yVVgSdPYJ2W"
        ></iframe>
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      readingTable: await getReadingTable(),
      playingTable: await getPlayingTable(),
    },
  };
}
