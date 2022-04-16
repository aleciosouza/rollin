import React, { useMemo } from "react";
import moment from "moment";

import { AppContext } from "../../App/AppContext";

import Select from "../Select/Select";

import * as Style from "../../../styles/Common/DateFilter/MonthSelector";
import { useContextSelector } from "use-context-selector";

const MonthSelector: React.FC = () => {
  const { lang, filter, setFilter } = useContextSelector(
    AppContext,
    (data) => ({
      lang: data.lang,
      filter: data.filter,
      setFilter: data.setFilter,
    })
  );

  moment.locale(lang);

  const currentMonth = filter.month();

  const months = useMemo(
    () =>
      moment.months().map((month, index) => (
        <option key={month.toLowerCase()} value={index}>
          {month}
        </option>
      )),
    [lang]
  );

  const handleMonthChanged: React.ChangeEventHandler<HTMLSelectElement> = (e) =>
    setFilter(filter.clone().month(e.target.value));

  return (
    <Style.Container>
      <Select value={currentMonth} onChange={handleMonthChanged}>
        {months}
      </Select>
    </Style.Container>
  );
};

export default MonthSelector;
