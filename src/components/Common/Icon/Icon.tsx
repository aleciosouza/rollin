import React from "react";

import * as Style from "../../../styles/Common/Icon/Icon";

interface IIconProps {
  name: string;
  alt: string;
}

const Icon: React.FC<IIconProps> = ({ name, alt }) => (
  <Style.Picture>
    <source type="image/svg+xml" srcSet={`/assets/images/icons/${name}`} />
    <img src={`/assets/images/icons/${name}`} alt={alt}></img>
  </Style.Picture>
);

export default Icon;
