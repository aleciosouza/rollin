import React, { Dispatch, SetStateAction, useMemo } from "react";

import { Event } from "../../entities/Event/Event";

import Icon from "../Common/Icon/Icon";

import * as Style from "../../styles/Event/EventCard";
import EventService from "../../services/Event/EventService";
import Utils from "../../services/Utils";

interface IEventCard {
  event: Event;
  userId: number;
  setEvent: Dispatch<SetStateAction<Event | undefined>>;
}

const EventCard: React.FC<IEventCard> = ({ event, userId, setEvent }) => {
  const $EventService = new EventService();

  const handleEventClicked = () => setEvent(event);

  const hasDebt = $EventService.hasDebtOnEvent(event, userId);

  const cardValue = hasDebt
    ? $EventService.getDebtFromEvent(event, userId)
    : $EventService.getCreditFromEvent(event, userId);

  return (
    <Style.Container hasDebt={hasDebt} onClick={handleEventClicked}>
      <Style.Date>
        <p>{event.date.format("ddd")}</p>
        <span>{event.date.format("d")}</span>
      </Style.Date>

      <Style.EventContainer>
        <Style.Title>
          <Icon
            alt="Menu"
            name={`trending_${hasDebt ? "down" : "up"}_white.svg`}
          />
          <h2>{event.name}</h2>
        </Style.Title>

        <Style.Value>{Utils.formatToCurrency(cardValue)}</Style.Value>
      </Style.EventContainer>
    </Style.Container>
  );
};

export default EventCard;
