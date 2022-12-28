import styled from 'styled-components';
import { colors } from '@components/application/Theme';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.lightBg};
  padding: 15px 18px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: space-between;

  .trans__status {
    display: flex;
    align-items: center;
    gap: 23px;

    .trans__summary {
      .summary__dets {
        color: ${({ theme }) => theme.text};
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 6px;

        span {
          background-color: #253339;
          padding: 3px 8px;
          border-radius: 4px;
          font-weight: bold;
          font-size: 8px;
        }
      }

      .summary__date {
        color: ${({ theme }) => theme.subText};
        font-size: 12px;
      }
    }
  }

  .trans__details {
    text-align: right;

    .trans__bought {
      font-size: 14px;
      font-weight: bold;
      color: ${({ theme }) => theme.text};
    }

    .trans__inUSD {
      color: ${({ theme }) => theme.subText};
      font-size: 12px;
    }
  }
`;
