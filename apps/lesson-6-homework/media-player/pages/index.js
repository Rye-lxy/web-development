import Head from 'next/head'
import App from './_app'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Media Player</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-sc ale=1.0, maximum-scale=1.0" />
      </Head>
      {App}
    </div>
  )
}
