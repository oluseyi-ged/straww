import Document, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  //--------------For styled-components only------------//
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      }
    } finally {
      sheet.seal()
    }
  }
  //---------------------------------------------------//
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/Rubik-Regular.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Rubik-Bold.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Rubik-Medium.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Rubik-SemiBold.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
