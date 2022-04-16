import React from "react";
import { useContextSelector } from "use-context-selector";

import { AppContext } from "../../App/AppContext";

import EventHeader from "./EventHeader";
import Icon from "../../Common/Icon/Icon";

import * as Style from "../../../styles/Event/EventComponent";
import EventItemList from "../EventItem/EventItemList";

const EventComponent: React.FC = () => {
  const { userId, event } = useContextSelector(AppContext, (data) => ({
    event: data.event,
    userId: data.user?.id,
  }));

  if (!event || userId === undefined) return null;

  return (
    <Style.Container>
      <EventHeader userId={userId} event={event} />
      <EventItemList event={event} userId={userId} />
    </Style.Container>
  );
};

export default EventComponent;
