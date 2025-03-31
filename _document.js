import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Any existing head elements */}
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* GoatCounter Analytics */}
        <script
          data-goatcounter="https://vamdesign.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
      </body>
    </Html>
  )
}