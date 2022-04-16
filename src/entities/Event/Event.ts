import moment, { Moment } from "moment";

export interface ItemDebtor {
  id: number;
  paid: boolean;
}

export interface EventItem {
  id: number;
  name: string;
  value: number;
  owner: number;
  paid: boolean;
  debtors: ItemDebtor[];
}

export class Event {
  public items: EventItem[];

  public readonly id: number;
  public readonly name: string;
  public readonly creator: number;
  public readonly date: moment.Moment;

  constructor(
    id: number,
    creator: number,
    name: string,
    date: Moment,
    items?: EventItem[]
  ) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.creator = creator;

    this.items = items ? items : [];
  }

  getPaymentStatus() {
    if (!this.items) return 100;
  }
}
