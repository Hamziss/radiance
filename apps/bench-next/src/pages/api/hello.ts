// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
	message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  delay(400).then(() => {
    res.status(200).json({
      message: `This route with id ${req.query.id} is called at ${new Date()}`,
    });
  });
}
