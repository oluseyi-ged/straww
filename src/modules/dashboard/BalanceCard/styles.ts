import styled from 'styled-components';
import { colors } from '@components/application/Theme';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.lightBg};
  padding: 26px 20px 32px 20px;
  border-radius: 15px;
  flex: 1 0 auto;
  margin: 11px;

  .card__title {
    font-size: 12px;
  }

  .card__balance {
    font-weight: bold;
    padding-top: 12px;
    font-size: 24px;
  }
`;
