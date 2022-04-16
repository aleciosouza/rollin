import React from "react";

import Icon from "./Icon";

interface ITrendingIcon {
  down?: boolean;
}

const TrendingIcon: React.FC<ITrendingIcon> = ({ down = false }) => (
  <Icon
    name={`trending_${down ? "down_red" : "up_green"}.svg`}
    alt={`Seta para ${down ? "baixo" : "cima"}`}
  />
);

export default TrendingIcon;
