import React from "react";

import HomeHeader from "./HomeHeader";
import HomeContent from "./HomeContent";

const HomeComponent: React.FC = () => {
  return (
    <Style.Container>
      <HomeHeader />
      {/* <HomeContent /> */}
    </Style.Container>
  );
};

export default HomeComponent;
