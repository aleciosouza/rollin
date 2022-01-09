import React from "react";

import HomeHeader from "./HomeHeader";
import EventList from "../Event/EventList";

import * as Style from "../../styles/Home/HomeComponent";

const HomeComponent: React.FC = () => {
  return (
    <Style.Container>
      <HomeHeader />
      <EventList />
    </Style.Container>
  );
};

export default HomeComponent;
