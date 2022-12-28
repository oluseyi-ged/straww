import styled from 'styled-components';
import { colors } from '@components/application/Theme';
import resp from '@utils/resp';

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.cardBg};
  padding: 6px;
  cursor: pointer;
  border-radius: 10px;

  .toggle__active {
    color: #04151d;
    background-color: #fff;
    border-radius: 10px;
    padding: 7.5px 17px;
    font-size: 18px;
  }

  .toggle__item {
    color: #fff;
    border-radius: 10px;
    padding: 7.5px 17px;
    font-size: 18px;
  }
`;
