// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";

import { Event } from "../../entities/Event/Event";

export const events: Event[] = [
  new Event(0, 0, "Mc Donalds", moment("2022-01-01"), [
    {
      id: 0,
      owner: 0,
      value: 12.5,
      paid: false,
      name: "Mc Meal",
      debtors: [
        { id: 1, paid: false },
        { id: 2, paid: false },
        { id: 3, paid: false },
      ],
    },
    {
      id: 1,
      owner: 0,
      value: 4.5,
      paid: false,
      name: "Mc Fries",
      debtors: [
        { id: 1, paid: false },
        { id: 2, paid: false },
        { id: 3, paid: false },
      ],
    },
    {
      id: 2,
      owner: 0,
      value: 2.5,
      paid: false,
      name: "Coke",
      debtors: [
        { id: 1, paid: false },
        { id: 2, paid: false },
        { id: 3, paid: false },
      ],
    },
  ]),
  new Event(1, 1, "Barbecue", moment("2022-02-01"), [
    {
      id: 0,
      owner: 1,
      value: 27.75,
      paid: false,
      name: "Meat",
      debtors: [
        { id: 0, paid: false },
        { id: 2, paid: false },
        { id: 3, paid: false },
      ],
    },
    {
      id: 1,
      owner: 1,
      value: 12.5,
      paid: false,
      name: "Sausage",
      debtors: [
        { id: 0, paid: false },
        { id: 2, paid: false },
        { id: 3, paid: false },
      ],
    },
    {
      id: 2,
      owner: 1,
      value: 7.5,
      paid: false,
      name: "Brioche Buns",
      debtors: [
        { id: 0, paid: false },
        { id: 2, paid: false },
        { id: 3, paid: false },
      ],
    },
  ]),
  new Event(2, 0, "Party", moment("2022-03-01"), [
    {
      id: 0,
      owner: 0,
      value: 89,
      paid: false,
      name: "Drinks",
      debtors: [
        { id: 1, paid: false },
        { id: 2, paid: false },
        { id: 3, paid: false },
      ],
    },
    {
      id: 1,
      owner: 0,
      value: 44.5,
      paid: false,
      name: "Cake",
      debtors: [
        { id: 1, paid: false },
        { id: 2, paid: false },
        { id: 3, paid: false },
      ],
    },
    {
      id: 2,
      owner: 0,
      value: 122.65,
      paid: false,
      name: "Food",
      debtors: [
        { id: 1, paid: false },
        { id: 2, paid: false },
        { id: 3, paid: false },
      ],
    },
  ]),
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event[]>
) {
  res.status(200).json(events);
}
