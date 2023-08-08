import React from 'react';

const Loader = (props: any) => {
  return (
    <div className="flex items-center justify-center ">
      <div className="h-24 w-24 animate-spin rounded-full border-l-2 border-gray-900" />
    </div>
  );
};

export default Loader;
