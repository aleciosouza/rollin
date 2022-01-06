import React, { useContext } from "react";

import { AppContext } from "../App/AppContext";

import HomeHeader from "./HomeHeader";

const HomeComponent: React.FC = () => {
  const { filter } = useContext(AppContext);
  return (
    <>
      <HomeHeader />
      <p>{filter.format("LL")}</p>
    </>
  );
};

export default HomeComponent;
