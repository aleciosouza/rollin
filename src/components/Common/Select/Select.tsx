import React, { ReactNode } from "react";

import * as Style from "../../../styles/Common/Select/Select";

const Select: React.FC<{
  defaultValue?: string;
  children: ReactNode | ReactNode[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}> = ({ children, onChange }) => (
  <Style.Container onChange={onChange}>{children}</Style.Container>
);

export default Select;
