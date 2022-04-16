import React, { useMemo } from "react";

import Utils from "../../../services/Utils";
import EventService from "../../../services/Event/EventService";

import { Event } from "../../../entities/Event/Event";

import Icon from "../../Common/Icon/Icon";

import * as Style from "../../../styles/Event/EventComponent";

interface IEventHeader {
  event: Event;
  userId?: number;
}

const EventHeader: React.FC<IEventHeader> = ({ event, userId }) => {
  const $EventService = new EventService();

  const debit = useMemo(
    () => Utils.formatToCurrency($EventService.getDebtFromEvent(event, userId)),
    [event]
  );

  const credit = useMemo(
    () =>
      Utils.formatToCurrency($EventService.getCreditFromEvent(event, userId)),
    [event]
  );

  return (
    event && (
      <Style.Header>
        <Style.HeaderInfo>
          <Style.Title>{event.name}</Style.Title>
          <Style.Date>{event.date.format("DD/MM/YYYY")}</Style.Date>
        </Style.HeaderInfo>

        <Style.HeaderStatus>
          <Style.EventStatus>
            <Icon name="trending_up_white.svg" alt="Menu" />
            <span>A receber</span>
            <p>{credit}</p>
          </Style.EventStatus>

          <Style.EventStatus isDebt>
            <Icon name="trending_down_white.svg" alt="Menu" />
            <span>A pagar</span>
            <p>{debit}</p>
          </Style.EventStatus>
        </Style.HeaderStatus>
      </Style.Header>
    )
  );
};

export default EventHeader;
