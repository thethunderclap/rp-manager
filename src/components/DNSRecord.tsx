import React from 'react';

const Header = (props: any) => {
  return (
    <div className="flex items-center justify-evenly p-2">
      <div className="text-lg font-semibold">{props.title} </div>
    </div>
  );
};

const Column = (props: any) => {
  return (
    <div className="flex items-center justify-evenly gap-1 p-1">
      <span className="text-base font-medium">{props.record.type}</span>
      <span className="text-base font-medium">{props.record.name}</span>
      <span className="text-base font-medium">{props.record.content}</span>
      <span className="text-base font-medium">{props.record.ttl}</span>
    </div>
  );
};

const DNSRecord = (props: any) => {
  const { records } = props;
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex items-center justify-evenly gap-2 p-1">
        <Header title="Type" />
        <Header title="Name" />
        <Header title="Content" />
        <Header title="TTL" />
      </div>
      <div className="flex flex-col">
        {records.map((record: any) => {
          return <Column key={record.id} record={record} />;
        })}
      </div>
    </div>
  );
};

export default DNSRecord;
