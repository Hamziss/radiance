import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
	message: string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	res.setHeader("Cache-Control", "s-maxage=86400")
	res.status(200).json({ message: "Hello from NextJS API routes" })
}
