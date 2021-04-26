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
<meta name="viewport" content="width=device-width, intial-scale=1.0" />
{/* <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}
<meta charset="UTF-8" />
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