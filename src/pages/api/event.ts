// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";

import { Event } from "../../components/Event/Event";

export const events: Event[] = [
  {
    items: [],
    creator: 0,
    name: "Mc Donalds",
    date: moment("2022-01-01"),
  },
  {
    items: [],
    creator: 1,
    name: "Barbecue",
    date: moment("2022-02-01"),
  },
  {
    items: [],
    creator: 0,
    name: "Party",
    date: moment("2022-03-01"),
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event[]>
) {
  res.status(200).json(events);
}
