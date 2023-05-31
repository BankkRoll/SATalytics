import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.query;

  try {
    const response = await fetch(`https://ordapi.bestinslot.xyz/v1/get_collection/${name}`);
    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err as Error });
  }
}
