import React, { FC, useEffect, useState } from 'react';
import { Container } from './styles';

interface Props {}

export const SavingsCard: FC<Props> = ({}) => {
  return (
    <Container>
      <div className="savings__dets">
        <div className="savings__detsMain">
          <p className="savings__name">Mercedes Benz</p>
          <p className="savings__duration">
            <img
              src="https://res.cloudinary.com/gigx-technologies/image/upload/v1653434716/xpad-assets/acct-login_z6cqaj.svg"
              alt=""
            />
            Term ends in 20 days
          </p>
        </div>
        <p className="savings__name">2,709 USDT</p>
      </div>
      <div className="savings__divider" />
      <div className="savings__interest">
        <div className="savings__intContainer">
          <p className="savings__intTitle">Interest Earned</p>
          <p className="savings__rate">@7.5% p.a</p>
        </div>
        <p className="savings__profit">+677.00</p>
      </div>
    </Container>
  );
};
