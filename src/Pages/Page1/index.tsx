import React, { useEffect, useState } from 'react';
import { Card } from '../../Components/Card';

import './style.css';

type DataType = {
  readonly id: number;
  readonly title: string;
  readonly content: string;
  readonly price: string;
};

export const Page1 = () => {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <main>
      {data &&
        data.map((card) => (
          <Card
            key={card.id}
            content={card.content}
            price={card.price}
            title={card.title}
          />
        ))}
    </main>
  );
};
