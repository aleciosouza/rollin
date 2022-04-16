// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { User } from "../../entities/User";

const user: User = {
  id: 1,
  name: "Jon Doe",
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  return res.status(200).json(user);
}
