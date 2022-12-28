import React, { FC, useState } from 'react';
import { Subscribe, Footer, Download } from '@modules/application';
import { Container } from './styles';

interface Props {}

const YieldCard: FC<Props> = ({}) => {
  return (
    <Container>
      <p className="yield__name">
        Flexible <span>@ 2% P.A</span>
      </p>
      <p className="yield__dets">Assets can be withdrawn at anytime, and will earn 2% per year for the duration</p>
    </Container>
  );
};

export default YieldCard;
