import React from "react";
import { useContextSelector } from "use-context-selector";

import EventCard from "./EventCard";

import { AppContext } from "../App/AppContext";

import * as Style from "../../styles/Event/EventList";

const EventList: React.FC = () => {
  const { userId, events, setEvent } = useContextSelector(
    AppContext,
    (data) => ({
      events: data.events,
      userId: data.user?.id,
      setEvent: data.setEvent,
    })
  );

  if (!events || !events.length || userId === undefined) return null;

  return (
    <Style.Container>
      {events.map((event) => (
        <EventCard
          event={event}
          userId={userId}
          setEvent={setEvent}
          key={event.date.toISOString()}
        />
      ))}
    </Style.Container>
  );
};

export default EventList;
