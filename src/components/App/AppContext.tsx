import React, {
  useState,
  Dispatch,
  createContext,
  SetStateAction,
} from "react";

import moment, { Moment } from "moment";

interface IAppContext {
  lang: string;
  filter: Moment;
  setFilter: Dispatch<SetStateAction<Moment>>;
}

interface IAppProvider {
  lang: string;
}

const initialState = {
  lang: "pt-br",
  filter: moment(),
};

export const AppContext = createContext<IAppContext>(initialState);

const AppProvider: React.FC<IAppProvider> = ({ lang, children }) => {
  moment.locale(lang);

  const [filter, setFilter] = useState<moment.Moment>(moment());

  return (
    <AppContext.Provider
      value={{
        lang,
        filter,
        setFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
