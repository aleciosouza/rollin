import React from "react";

import { Event } from "../../../entities/Event/Event";
import EventItemCard from "./EventItemCard";

import * as Style from "../../../styles/Event/EventItem/EventItemList";

interface IEventItemList {
  event: Event;
  userId: number;
}

const EventItemList: React.FC<IEventItemList> = ({ event, userId }) => {
  return (
    <Style.Container>
      {event.items.map((item) => (
        <EventItemCard
          item={item}
          userId={userId}
          key={`${event.id}-${item.id}`}
        />
      ))}
    </Style.Container>
  );
};

export default EventItemList;
