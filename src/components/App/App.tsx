import React, { useEffect } from "react";
import { useContextSelector } from "use-context-selector";

import { AppContext } from "./AppContext";

import { User } from "../../entities/User";

import HomeComponent from "../Home/HomeComponent";

interface IApp {
  user: User;
}

const App: React.FC<IApp> = ({ user }) => {
  const setUser = useContextSelector(AppContext, (data) => data.setUser);

  useEffect(() => {
    if (!user) return;

    setUser(user);
  }, [user]);

  return <HomeComponent />;
};

export default App;
