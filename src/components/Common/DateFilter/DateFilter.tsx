import React from "react";

import Icon from "../Icon/Icon";

import * as Style from "../../../styles/Common/DateFilter/DateFilter";
import MonthSelector from "./MonthSelector";

const DateFilter: React.FC = () => {
  return (
    <Style.Container>
      <Icon name="menu_white.svg" alt="Menu" />
      <MonthSelector />
      <Icon name="today_white.svg" alt="Hoje" />
    </Style.Container>
  );
};

export default DateFilter;
