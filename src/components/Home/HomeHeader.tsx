import React, { useContext } from "react";

import { AppContext } from "../App/AppContext";
import DateFilter from "../Common/DateFilter/DateFilter";

const HomeHeader: React.FC = () => {
  const { filter } = useContext(AppContext);
  return <DateFilter />;
};

export default HomeHeader;
