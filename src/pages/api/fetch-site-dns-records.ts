import type { NextApiRequest, NextApiResponse } from 'next';

import { CF_URLS, getHeaders } from '@/utils/Cloudflare';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET')
    return res.status(405).json({ error: 'Method not allowed' });

  // const zoneId = '9fb06258f34f6d16ca455c219300a865';
  const { zoneId } = req.query;
  console.log('from request', zoneId);
  if (!zoneId) return res.status(400).json({ error: 'Missing zoneId' });
  try {
    const headers = getHeaders();
    const results = await (
      await fetch(CF_URLS.DNS_RECORDS(zoneId), {
        headers,
      })
    ).json();

    console.log(results);
    return res.status(200).json({ dnsRecords: results });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
