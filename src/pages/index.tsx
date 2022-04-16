import React from "react";
import Head from "next/head";
import type { GetServerSideProps, NextPage } from "next";

import App from "../components/App/App";

import { User } from "../entities/User";

import UserService from "../services/User/UserService";

interface IHome {
  user: User;
}

const Home: NextPage<IHome> = ({ user }) => {
  return (
    <div>
      <Head>
        <title>Rollin</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <App user={user} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const $UserService = new UserService();
  const user = await $UserService.getUser();

  return {
    props: { user },
  };
};

export default Home;
