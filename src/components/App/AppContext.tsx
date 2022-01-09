import React, {
  useState,
  Dispatch,
  useEffect,
  createContext,
  SetStateAction,
} from "react";

import moment, { Moment } from "moment";

import { Event } from "../Event/Event";

import EventService from "../../services/Event/EventService";

interface IAppContext {
  lang: string;
  filter: Moment;
  events: Event[];
  setFilter: Dispatch<SetStateAction<Moment>>;
  setEvents: Dispatch<SetStateAction<Event[]>>;
}

interface IAppProvider {
  lang: string;
}

const initialState = {
  events: [],
  lang: "pt-br",
  filter: moment(),
  setFilter: () => {},
  setEvents: () => {},
};

export const AppContext = createContext<IAppContext>(initialState);

const AppProvider: React.FC<IAppProvider> = ({ lang, children }) => {
  moment.locale(lang);

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
        lang,
        filter,
        events,
        setEvents,
        setFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
