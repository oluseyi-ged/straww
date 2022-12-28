import styled from 'styled-components';
import { colors } from '@components/application/Theme';
import resp from '@utils/resp';

export const Container = styled.div`
  width: 100%;

  .input__label {
    color: ${({ theme }) => theme.text};
    font-size: 12px;
    margin-bottom: 15px;
    margin-left: 5px;
  }

  .input__container {
    padding: 15px 14px;
    font-size: 0.9rem;
    background-color: ${({ theme }) => theme.light};
    border: none;
    outline: none;
    border-radius: 5px;
    /* width: 300px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  input {
    background-color: transparent;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.subText};
  }
`;
