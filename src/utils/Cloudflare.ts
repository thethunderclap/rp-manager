const BASE_URL = `https://api.cloudflare.com/client/v4`;

const CF_URLS = {
  ZONES: `${BASE_URL}/zones`,
  DNS_RECORDS: (zoneId: string) => `${BASE_URL}/zones/${zoneId}/dns_records`,
  DNS_RECORD: `${BASE_URL}/zones/:zoneId/dns_records/:recordId`,
  DNS_RECORDS_FILTER: `${BASE_URL}/zones/:zoneId/dns_records?name=:name`,
  DNS_RECORDS_FILTER_TYPE: `${BASE_URL}/zones/:zoneId/dns_records?name=:name&type=:type`,
};

const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'X-Auth-Email': process.env.CF_EMAIL || 'Hjjujwapmumwiuaiba@cazlv.com',
    'X-Auth-Key':
      process.env.CF_API_KEY || 'ae5fda0b0cb3440012f56b5c75c94aa8ab096',
  };
};

export { CF_URLS, getHeaders };
