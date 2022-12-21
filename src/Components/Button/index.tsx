import React from 'react';

import './style.css';

export type ButtonProps = {
  readonly text: string;
};

export const Button = (props: ButtonProps) => {
  const { text } = props;

  return (
    <button>
      <span>{text}</span>
    </button>
  );
};
