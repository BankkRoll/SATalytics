import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  
  try {
    const response = await axios.get(`https://bis-ord-content.fra1.cdn.digitaloceanspaces.com/ordinals/${id}`, {
      responseType: 'arraybuffer'
    });

    res.setHeader('Content-Type', response.headers['content-type']);
    res.send(Buffer.from(response.data, 'binary'));
  } catch (error) {
    res.status(500).json({ error: 'Error fetching image' });
  }
}
