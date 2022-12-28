import React, { FC } from 'react';
import { Container } from './styles';

interface Props {
  title: string;
  balance: string;
  currency?: string;
}

export const BalanceCard: FC<Props> = ({ title, currency, balance }) => {
  return (
    <Container>
      <div>
        <p className="card__title">{title}</p>
        <div>
          <p className="card__balance">
            {currency} {balance}
          </p>
        </div>
      </div>
    </Container>
  );
};
