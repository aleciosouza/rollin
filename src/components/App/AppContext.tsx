import React from "react";
import { createContext } from "use-context-selector";

interface IAppContext {
  children: React.ReactNode;
}

interface IAppProvider {
  lang: string;
  children: any,
}

const initialState = {
};

export const AppContext = createContext(initialState);

const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
