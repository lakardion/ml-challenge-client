import { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import "../styles/globals.scss";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Challenge | Home</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
