import styled from 'styled-components';
import { colors } from '@components/application/Theme';
import resp from '@utils/resp';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.lightBg};
  border-radius: 15px;
  height: 266px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 180px;
  flex: 1 0 auto;

  .yield__name {
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};

    span {
      font-size: 14px;
      font-weight: normal;
      letter-spacing: 1.2px;
    }
  }

  .yield__dets {
    margin-top: 20px;
    color: ${({ theme }) => theme.subText};
    font-size: 13px;
    width: 80%;
  }
`;
