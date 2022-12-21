import React from 'react';
import { Title, TitleProps } from '../Title';
import { Column, ColumnsProps } from '../Column';
import { Button } from '../Button';

import './style.css';

export type BuyButtonProps = {
  readonly price: string;
};

const BuyButton = (props: BuyButtonProps) => {
  const { price } = props;

  return <Button text={`R$${price}`} />;
};

type CardProps = {
  title: string;
  content: string;
  price: string;
};

export const Card = (props: CardProps) => {
  const { content, price, title } = props;

  return (
    <div>
      <Title title={title} />
      <Column content={content} />
      <BuyButton price={price} />
    </div>
  );
};
