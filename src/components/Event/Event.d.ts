import moment from "moment";

export type EventItem = {
  name: string;
  value: number;
  owner: number;
  debtors: number[];
};

export type Event = {
  name: string;
  creator: number;
  items: EventItem[];
  date: moment.Moment;
};
