import styled from 'styled-components';
import { colors } from '@components/application/Theme';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.lightBg};
  padding: 18px 19px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  gap: 9px;
  width: 180px;
  height: 60px;

  @media (max-width: 531px) {
    flex-grow: 1;
  }

  .wallet__asset {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => theme.text};
    font-size: 14px;

    img {
      width: 22px;
    }
  }

  .asset__balance {
    font-weight: bold;
    font-size: 18px;
  }
`;
