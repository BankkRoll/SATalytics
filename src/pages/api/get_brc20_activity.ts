// pages/api/get_brc20_activity.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { tick, filter_type, page, sort_type } = req.query;

  if (!tick || !filter_type || !page || !sort_type) {
    return res.status(400).json({ message: 'Missing parameters' });
  }

  try {
    const response = await axios.get(`https://brc20api.bestinslot.xyz/v1/get_brc20_activity/${tick}/${filter_type}/${page}/${sort_type}`);
    
    if (response.status === 200) {
      return res.status(200).json(response.data);
    } else {
      return res.status(response.status).json({ message: 'Unexpected error occurred' });
    }
  } catch (error) {
    return res.status(500).json({ message: error as Error });
  }
}
