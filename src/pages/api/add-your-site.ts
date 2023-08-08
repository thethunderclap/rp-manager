import type { NextApiResponse } from 'next';
import type { NextRequest } from 'next/server';

import { CF_URLS, getHeaders } from '@/utils/Cloudflare';

export default async function handler(req: NextRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });

  const parsedBody = JSON.parse(req.body);
  // console.log('req.body', parsedBody.domainName);
  const { domainName } = parsedBody;

  if (!domainName) return res.status(400).json({ error: 'Missing domainName' });
  const request = {
    account: {
      // hardcoding this for now
      id: '1956532513f840e226c7b62310878988',
    },
    name: domainName,
    jump_start: true,
  };

  const headers = getHeaders();
  // console.log('request', { request, headers });

  try {
    const results = await (
      await fetch(CF_URLS.ZONES, {
        method: 'POST',
        headers,
        body: JSON.stringify(request),
      })
    ).json();

    // console.log('add site results ;:', results);

    if (results.success === false)
      return res.status(400).json({ error: results.errors[0].message });
    const response = {
      zoneId: results.result.id,
      zoneName: results.result.name,
      newNS: results.result.name_servers,
      currentNS: results.result.original_name_servers,
      originalRegistrar: results.result.original_registrar,
    };
    return res.status(200).json(response);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
