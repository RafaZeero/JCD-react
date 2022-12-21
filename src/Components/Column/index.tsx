import React from 'react';

import './style.css';

export type ColumnsProps = {
  readonly content: string;
};

export const Column = (props: ColumnsProps) => {
  const { content } = props;

  return (
    <div>
      <p>{content}</p>
    </div>
  );
};
