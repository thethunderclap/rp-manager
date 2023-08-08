import type { NextApiResponse } from 'next';
import type { NextRequest } from 'next/server';

export default function handler(req: NextRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });

  // call firebase or whatever to get login details
  // if login details are correct, return a token
}
