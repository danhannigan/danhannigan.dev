import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          async
          defer
          data-website-id="4124e679-f902-4288-ac2a-c07861eaa94d"
          src="https://luminous-sunburst-e0c391.netlify.app/umami.js"
        ></script>
      </Head>
      <body className="bg-white dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
