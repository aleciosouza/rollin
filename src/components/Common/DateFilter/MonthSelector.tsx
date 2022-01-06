import React, { useContext, useMemo } from "react";
import moment from "moment";

import { AppContext } from "../../App/AppContext";

import Select from "../Select/Select";

import * as Style from "../../../styles/Common/DateFilter/MonthSelector";

const MonthSelector: React.FC = () => {
  const { lang, filter, setFilter } = useContext(AppContext);

  const months = useMemo(() => {
    moment.locale(lang);

    const currentMonth = filter.month();

    return moment.months().map((month, index) => {
      const lower = month.toLowerCase();

      return (
        <option key={lower} value={index} selected={index === currentMonth}>
          {month}
        </option>
      );
    });
  }, [lang]);

  const handleMonthChanged: React.ChangeEventHandler<HTMLSelectElement> = (e) =>
    setFilter(filter.clone().month(e.target.value));

  return (
    <Style.Container>
      <Select onChange={handleMonthChanged}>{months}</Select>
    </Style.Container>
  );
};

export default MonthSelector;
