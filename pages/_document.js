import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
<Html>
<Head>
<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
<script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
<link rel="icon" href="https://akm-img-a-in.tosshub.com/sites/harpers-bazaar/resources/images/favicon.ico" type="image/x-icon" />
<link rel="canonical" href="http://alpha-harperbazar.intoday.in/fashion" />
</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument