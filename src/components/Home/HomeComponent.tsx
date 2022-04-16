import React from "react";

import HomeHeader from "./HomeHeader";
import HomeContent from "./HomeContent";

import * as Style from "../../styles/Home/HomeComponent";

const HomeComponent: React.FC = () => {
  return (
    <Style.Container>
      <HomeHeader />
      <HomeContent />
    </Style.Container>
  );
};

export default HomeComponent;
