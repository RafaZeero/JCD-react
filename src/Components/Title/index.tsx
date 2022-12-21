import React from 'react';

import './style.css';

export type TitleProps = {
  readonly title: string;
};

export const Title = (props: TitleProps) => {
  const { title } = props;

  return <h1>{title}</h1>;
};
