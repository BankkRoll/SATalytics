// pages/api/get_collections_supply_info.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch('https://ordapi.bestinslot.xyz/v1/get_collections_supply_info');
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err as Error });
  }
}
