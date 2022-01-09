import React, { useContext } from "react";

import { AppContext } from "../App/AppContext";

import EventCard from "./EventCard";

import * as Style from "../../styles/Event/EventList";

const EventList = () => {
  const { events } = useContext(AppContext);

  if (!events.length) return <p>Loading events...</p>;

  return (
    <Style.Container>
      {events.map((event) => (
        <EventCard key={event.date.toISOString()} event={event} />
      ))}
    </Style.Container>
  );
};

export default EventList;
