import React, { FC, useState } from 'react';
import { Container } from './styles';

interface Props {}

const OperationToggle: FC<Props> = ({}) => {
  const [operation, setOperation] = useState('BUY');

  return (
    <Container>
      <div
        className={operation === 'BUY' ? 'toggle__active' : 'toggle__item'}
        onClick={() => {
          setOperation('BUY');
        }}
      >
        <p>Buy</p>
      </div>
      <div
        className={operation !== 'BUY' ? 'toggle__active' : 'toggle__item'}
        onClick={() => {
          setOperation('SELL');
        }}
      >
        <p>Sell</p>
      </div>
    </Container>
  );
};

export default OperationToggle;
