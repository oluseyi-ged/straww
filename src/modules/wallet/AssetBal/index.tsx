import React, { FC, useEffect, useState } from 'react';
import { Container } from './styles';

interface Props {
  coin?: string;
  balance?: string;
  img?: string;
}

export const AssetBal: FC<Props> = ({ coin, balance, img }) => {
  return (
    <Container>
      <p className="wallet__asset">
        <img src={img} alt="" /> {coin}
      </p>
      <p className="asset__balance">
        {balance} {coin}
      </p>
    </Container>
  );
};
