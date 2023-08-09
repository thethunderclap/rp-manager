import { useRouter } from 'next/router';
import { useState } from 'react';

import TextInput from '@/components/atoms/TextInput';
import { Main } from '@/templates/Main';

/* const metadata: Metadata = {
  title: 'New Router',
  description:
    'Incrementally migrate your existing application from pages to app',
}; */

const FAB = (props: any) => {
  return (
    <div className="fixed bottom-8 right-5">
      <button
        type="button"
        className="rounded-full bg-blue-500 px-4 py-2 text-lg font-bold text-white hover:bg-blue-700"
        {...props}
      >
        Add subdomain
      </button>
    </div>
  );
};

const SubdomainInput = (props: any) => {
  const [value, setValue] = useState(props.value);
  const onChange = (e: any) => {
    setValue(e.target.value);
    props.onChange(e.target.value);
  };
  return (
    <div className="flex items-center justify-between gap-5">
      <div className="w-32">
        <TextInput onChange={onChange} value={value} placeholder="blogs" />
      </div>
      <span className="text-lg">{`->`}</span>
      <span className="text-xl">{`https://${props.domainName}/${value}`}</span>
    </div>
  );
};

const Step2 = () => {
  const router = useRouter();
  const parsedQuery = router.query;

  const [subdomains, setSubdomains] = useState([
    {
      id: 1,
      value: 'app',
    },
  ]);

  const handleOnChange = (value: string, id: number) => {
    setSubdomains((prev) => {
      const newSubdomains = prev.map((subdomain) => {
        if (subdomain.id === id) {
          return {
            ...subdomain,
            value,
          };
        }
        return subdomain;
      });
      return newSubdomains;
    });
  };

  const handleAddSubdomain = () => {
    const newSubdomain = {
      id: subdomains.length + 1,
      value: '',
    };
    setSubdomains((prev) => [...prev, newSubdomain]);
  };

  console.log('Final domains >>>', { subdomains, parsedQuery });

  return (
    <Main>
      <div className="flex h-screen w-full flex-col items-center justify-start gap-2">
        <h1 className="text-3xl font-bold">Add subdomain</h1>
        <p>This page helps you configure subdomains as subroutes</p>

        <div className="flex flex-col items-center justify-between gap-2">
          {subdomains.map((subdomain) => {
            return (
              <SubdomainInput
                key={subdomain.id}
                domainName={parsedQuery?.domainName || 'yourdomain.com'}
                value={subdomain.value}
                onChange={(value: string) =>
                  handleOnChange(value, subdomain.id)
                }
              />
            );
          })}
        </div>
        <FAB onClick={handleAddSubdomain} />
      </div>
    </Main>
  );
};

export default Step2;
