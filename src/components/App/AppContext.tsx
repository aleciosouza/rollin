import React, { useState, Dispatch, useEffect, SetStateAction } from "react";

import { createContext } from "use-context-selector";

import moment, { Moment } from "moment";

import { Event } from "../../entities/Event/Event";

import EventService from "../../services/Event/EventService";
import { User } from "../../entities/User";

interface IAppContext {
  user?: User;
  lang: string;
  event?: Event;
  filter: Moment;
  events: Event[];
  setFilter: Dispatch<SetStateAction<Moment>>;
  setEvents: Dispatch<SetStateAction<Event[]>>;
  setUser: Dispatch<SetStateAction<User | undefined>>;
  setEvent: Dispatch<SetStateAction<Event | undefined>>;
}

interface IAppProvider {
  lang: string;
}

const initialState = {
  events: [],
  lang: "pt-br",
  filter: moment(),
  setUser: () => {},
  setEvent: () => {},
  setFilter: () => {},
  setEvents: () => {},
};

export const AppContext = createContext<IAppContext>(initialState);

const AppProvider: React.FC<IAppProvider> = ({ lang, children }) => {
  moment.locale(lang);

  const [user, setUser] = useState<User>();
  const [event, setEvent] = useState<Event>();
  const [events, setEvents] = useState<Event[]>([]);
  const [filter, setFilter] = useState<moment.Moment>(moment());

  const $EventService = new EventService();

  const initState = async () => {
    try {
      const _events = await $EventService.getEvents();
      setEvents(_events);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    initState();
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        lang,
        event,
        filter,
        events,
        setUser,
        setEvent,
        setFilter,
        setEvents,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
