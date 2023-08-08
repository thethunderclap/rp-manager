import { useRouter } from 'next/router';
import { useState } from 'react';

import Button from '@/components/atoms/Button';
import Loader from '@/components/atoms/Loader';
import TextInput from '@/components/atoms/TextInput';
import { Meta } from '@/layouts/Meta';
import { addCustomSite } from '@/services/api-requests';
import { Main } from '@/templates/Main';
import type { SITEDETAILS } from '@/utils/types';

// root/home route
const Index = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [siteDetails, setSiteDetails] = useState<SITEDETAILS | null>(null);

  /* const siteDetails = {
    zoneId: '9fb06258f34f6d16ca455c219300a865',
    zoneName: 'thethunderclap.com',
    newNS: ['abc', 'def'],
    currentNS: ['abc', 'def'],
    originalRegistrar: 'GoDaddy',
  }; */
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = async () => {
    setIsFetching(true);
    const response = await addCustomSite(inputValue);
    if (response && response?.zoneId) {
      setSiteDetails(response);
      setInputValue('');
    } else {
      alert(response.error);
    }
    setIsFetching(false);
    // router.push(`/step1?domain=${inputValue}`);
  };

  return (
    <Main
      meta={
        <Meta
          title="RP Managers"
          description="RP Managers is a tool to help you stitch your different websites under one domain."
        />
      }
    >
      {isFetching ? (
        <Loader />
      ) : (
        <div className="flex h-screen w-full flex-col items-center justify-start gap-10">
          <h4 className="text-base font-bold"> Please add your domain</h4>
          <div className="flex w-1/2 items-center gap-10">
            <TextInput onChange={handleInputChange} value={inputValue} />
            <Button onClick={handleButtonClick} />
          </div>
          {siteDetails ? (
            <div className="shadow-900 flex h-1/2 w-full flex-col border-2 p-4 shadow-md ">
              <div className="flex items-center">
                <label className="font-medium">Site/Domain : </label>
                <p className="text-sm text-gray-500">
                  {siteDetails?.zoneName}
                </p>{' '}
              </div>
              <div className="flex items-center">
                <label className="font-medium">Original Registrar : </label>
                <p className="text-sm text-gray-500">
                  {siteDetails?.originalRegistrar}
                </p>{' '}
              </div>
              <div className="flex items-center ">
                <label className="font-medium">Current Nameserver : </label>
                <p className="rounded-md bg-gray-600 p-1 text-base text-gray-100">
                  {' '}
                  {siteDetails?.currentNS.join(',')}
                </p>
              </div>
              <p className="font-normal italic text-black">
                {' '}
                {`Replace above Nameserver with below nameservers in your ${
                  siteDetails.originalRegistrar.split(',')[0]
                } dashboard. `}
              </p>
              <div className="flex items-center">
                <label className="font-medium">New Nameserver : </label>
                <p className="rounded-md bg-gray-600 p-1 text-base text-gray-100">
                  {siteDetails?.newNS.join(',')}
                </p>{' '}
              </div>
            </div>
          ) : null}
          <Button
            onClick={() => {
              if (!siteDetails)
                return alert('Please add a domain. ZONE ID is required.');
              router.push(
                {
                  pathname: '/step1',
                  query: { siteDetails: JSON.stringify(siteDetails) },
                },
                '/step1',
              );
            }}
            text="Next Step"
          />
        </div>
      )}
    </Main>
  );
};

export default Index;
