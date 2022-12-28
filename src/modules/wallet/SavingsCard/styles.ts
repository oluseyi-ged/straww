import styled from 'styled-components';
import { colors } from '@components/application/Theme';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.lightBg};
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  justify-content: space-between;
  width: 49%;

  @media (max-width: 480px) {
    width: 100%;
  }

  .savings__dets {
    display: flex;
    justify-content: space-between;
    padding: 29px 19px 22px 20px;

    .savings__detsMain {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .savings__name {
      color: ${({ theme }) => theme.text};
      font-size: 18px;
    }

    .savings__duration {
      img {
        height: 12px;
        width: 9px;
      }
      display: flex;
      gap: 9.77px;
      align-items: center;
    }
  }

  .savings__divider {
    height: 1px;
    background-color: #ffffff20;
    margin-left: 20px;
  }

  .savings__interest {
    display: flex;
    justify-content: space-between;
    padding: 22px 25px 21px 20px;

    .savings__intContainer {
      display: flex;
      flex-direction: column;
      gap: 3px;

      .savings__intTitle {
        font-size: 14px;
        color: ${({ theme }) => theme.text};
      }

      .savings__rate {
        font-size: 14px;
        color: ${({ theme }) => theme.subText};
      }
    }

    .savings__profit {
      color: #5aeaa2;
      font-size: 14px;
    }
  }
`;
