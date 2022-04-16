import React from "react";
import { useContextSelector } from "use-context-selector";

import { AppContext } from "../App/AppContext";
import EventComponent from "../Event/EventComponent/EventComponent";

import EventList from "../Event/EventList";

const HomeContent: React.FC = () => {
  const { event } = useContextSelector(AppContext, (data) => ({
    event: data.event,
  }));

  if (event) return <EventComponent />;

  return <EventList />;
};

export default HomeContent;
