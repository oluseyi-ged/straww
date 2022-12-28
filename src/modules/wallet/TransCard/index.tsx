import React, { FC, useEffect, useState } from 'react';
import { Container } from './styles';

interface Props {
  coin?: string;
  balance?: string;
  img?: string;
}

export const TransCard: FC<Props> = ({ coin, balance, img }) => {
  return (
    <Container>
      <div className="trans__status">
        <img src="" alt="" />
        <div className="trans__summary">
          <p className="summary__dets">
            Bitcoin Purchase <span>Pending</span>
          </p>
          <p className="summary__date">
            Saturday, 12/05 <span>10:30pm</span>
          </p>
        </div>
      </div>
      <div className="trans__details">
        <p className="trans__bought">0.00019 BTC</p>
        <p className="trans__inUSD">$103.50</p>
      </div>
    </Container>
  );
};
