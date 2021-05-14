import Head from "next/head"
import Main from "../components/main"

export default function Home() {
  return (
    <div id="root">
      <Head>
        <title>pixiv</title>
        <meta name="description" content="A simulation of www.pixiv.net" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  );
}