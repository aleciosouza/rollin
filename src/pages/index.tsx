import React from "react";
import Head from "next/head";
import type { GetServerSideProps, NextPage } from "next";

import App from "../components/App/App";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rollin</title>
        <meta charSet="UTF-8" />
        <meta name="color-scheme" content="dark light" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <App />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default Home;
