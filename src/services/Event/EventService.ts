import axios, { AxiosInstance } from "axios";
import moment from "moment";

import { Event, EventItem } from "../../entities/Event/Event";

class EventService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: "/api/event",
    });
  }

  getEvents() {
    return new Promise<Event[]>((resolve, reject) => {
      this.api.get("").then((response) => {
        if (response.status !== 200) {
          reject();
          return;
        }

        resolve(
          response.data.map((event: Event) => {
            return { ...event, date: moment(event.date) };
          })
        );
      });
    });
  }

  hasDebtOnItem(item: EventItem, userId?: number) {
    return item.debtors.filter((debtor) => debtor.id === userId).length > 0;
  }

  hasDebtOnEvent(event: Event, userId?: number) {
    return this.getDebtFromEvent(event, userId) > 0;
  }

  getDebtFromEvent(event: Event, userId?: number) {
    if (userId === undefined) return 0;

    const debts = event.items
      .filter((item) => this.hasDebtOnItem(item, userId))
      .map((item) => item.value);

    return debts.length ? debts.reduce((prev, crr) => prev + crr) : 0;
  }

  getCreditFromEvent(event: Event, userId?: number) {
    if (userId === undefined) return 0;

    const credits = event.items
      .filter((item) => item.owner === userId)
      .map((item) => item.value);

    return credits.length ? credits.reduce((prev, crr) => prev + crr) : 0;
  }
}

export default EventService;
