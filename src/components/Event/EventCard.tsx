import React from "react";

import { Event } from "./Event";

import Icon from "../Common/Icon/Icon";

import * as Style from "../../styles/Event/EventCard";

interface IEventCard {
  event: Event;
}

const EventCard: React.FC<IEventCard> = ({ event }) => {
  const isDebt = event.creator !== 0;
  
  return (
    <Style.Container isDebt={isDebt}>
      <Style.Date>
        <p>{event.date.format("ddd")}</p>
        <span>{event.date.format("d")}</span>
      </Style.Date>

      <Style.EventContainer>
        <Style.Title>
          <Icon name={`trending_${isDebt ? 'down' : 'up'}_white.svg`} alt="Menu" />
          <h2>{event.name}</h2>
        </Style.Title>

        <Style.Value>R$150,00</Style.Value>
      </Style.EventContainer>
    </Style.Container>
  );
};

export default EventCard;
