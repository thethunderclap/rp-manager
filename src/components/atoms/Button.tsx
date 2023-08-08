import React from 'react';

const Button = (props: any) => {
  return (
    <button
      className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
      type="button"
      {...props}
    >
      {props.text || 'Add'}
    </button>
  );
};

export default Button;
