import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import DNSRecord from '@/components/DNSRecord';
import { Meta } from '@/layouts/Meta';
import { getCurrentDNSRecords } from '@/services/api-requests';
import { Main } from '@/templates/Main';
import type { SITEDETAILS } from '@/utils/types';

const Step1 = () => {
  const router = useRouter();
  const { siteDetails } = router.query;
  const [isFetching, setIsFetching] = useState(false);
  const [dnsRecords, setDNSRecords] = useState([]);
  const [siteData, setSiteData] = useState<SITEDETAILS | null>(null);
  // console.log('>>>>', siteData);

  useEffect(() => {
    if (siteDetails) setSiteData(JSON.parse(siteDetails as string));
  }, [router.query]);

  useEffect(() => {
    (async () => {
      setIsFetching(true);
      if (!siteData) return;
      const { dnsRecords } = await getCurrentDNSRecords(siteData?.zoneId);
      // console.log(dnsRecords);
      if (dnsRecords?.result?.length) {
        setDNSRecords(dnsRecords?.result);
      }
      setIsFetching(false);
    })();
  }, [siteData]);

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="flex h-screen w-full flex-col items-center justify-start">
        <h1 className="text-3xl font-bold">DNS records</h1>
        {dnsRecords.length ? (
          <DNSRecord records={dnsRecords} />
        ) : (
          <p className="text-md font-normal"> No records found </p>
        )}
      </div>
    </Main>
  );
};

export default Step1;
