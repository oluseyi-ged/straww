import styled from 'styled-components';
import { colors } from '@components/application/Theme';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.lightBg};
  padding: 26px 70px 39px 28px;
  border-radius: 15px;
  margin-top: 59px;
  margin-bottom: 24px;

  .welcome__text {
    color: ${({ theme }) => theme.text};
    font-size: 12px;
  }

  .prompt__container {
    display: flex;
    justify-content: space-between;
    margin-top: 13px;

    .prompt__left {
      .prompt__title {
        font-size: 24px;
        color: ${({ theme }) => theme.text};
      }

      .prompt__subtitle {
        font-size: 16px;
        color: ${({ theme }) => theme.subText};

        span {
          color: ${({ theme }) => theme.primary};
        }
      }
    }
  }
`;
