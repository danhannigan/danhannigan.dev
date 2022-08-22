import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="bg-background-default text-text-default">
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,${
                process.env.NODE_ENV === "development" ? "debug_mode: true" : ""
              }
            });
          `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;700&family=Josefin+Sans:wght@300;400;700&family=Lato&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="bg-background-default text-text-default">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
