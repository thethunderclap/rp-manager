import React from 'react';

const TextInput = (props: any) => {
  return (
    <input
      className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none focus:outline-1"
      id="username"
      type="text"
      placeholder="thethunderclap.com"
      {...props}
    />
  );
};

export default TextInput;
