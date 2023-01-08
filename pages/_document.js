import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="bg-background-default text-text-default">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;700&family=Josefin+Sans:wght@300;400;700&family=Lato&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="webmention"
          href="https://webmention.io/www.danhannigan.dev/webmention"
        />
        <link
          rel="pingback"
          href="https://webmention.io/www.danhannigan.dev/xmlrpc"
        />
      </Head>
      <body className="bg-background-default text-text-default">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
