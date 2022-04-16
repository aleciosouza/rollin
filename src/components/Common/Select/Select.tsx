import React, { ReactNode } from "react";

import * as Style from "../../../styles/Common/Select/Select";

const Select: React.FC<{
  value?: number;
  children: ReactNode | ReactNode[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}> = ({ value, children, onChange }) => (
  <Style.Container value={value} onChange={onChange}>
    {children}
  </Style.Container>
);

export default Select;
