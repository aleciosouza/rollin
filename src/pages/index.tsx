import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

import App from "../components/App/App";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rollin</title>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <App />
    </div>
  );
};

export default Home;
