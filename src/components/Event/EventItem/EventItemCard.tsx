import React from "react";

import Utils from "../../../services/Utils";
import EventService from "../../../services/Event/EventService";

import { EventItem } from "../../../entities/Event/Event";

import TrendingIcon from "../../Common/Icon/TrendingIcon";

import * as Style from "../../../styles/Event/EventItem/EventItemCard";

interface IEventItemCard {
  userId: number;
  item: EventItem;
}

const EventItemCard: React.FC<IEventItemCard> = ({ item, userId }) => {
  const $EventService = new EventService();

  const hasDebt = $EventService.hasDebtOnItem(item, userId);

  return (
    <Style.Container down={hasDebt}>
      <Style.Info>
        <TrendingIcon down={hasDebt} />
        <span>{item.name}</span>
      </Style.Info>
      <Style.Value>{Utils.formatToCurrency(item.value)}</Style.Value>
    </Style.Container>
  );
};

export default EventItemCard;
