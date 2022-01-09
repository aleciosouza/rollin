import axios, { AxiosInstance } from "axios";
import moment from "moment";
import { Event } from "../../components/Event/Event";

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
          response.data.map((event) => {
            return { ...event, date: moment(event.date) };
          })
        );
      });
    });
  }
}

export default EventService;
