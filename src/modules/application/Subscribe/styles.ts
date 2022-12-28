import styled from 'styled-components';
import { colors } from '@components/application/Theme';

export const Container = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.darkBg};
  padding: 7.875rem 0;

  .subscribe__container {
    width: 70%;
    margin: 0 auto;

    @media (max-width: 1120px) {
      width: 80%;
    }

    @media (max-width: 786px) {
      width: 80%;
    }
  }

  .subscribe__title {
    font-size: 2.813rem;
    font-weight: bold;

    @media (max-width: 1120px) {
      font-size: 2rem;
    }
  }

  .subscribe__subtitle {
    font-size: 16px;
  }

  .app__subscribe {
    background-color: ${({ theme }) => theme.backgroundColor};
    width: 60%;
    display: flex;
    justify-content: space-between;
    padding: 13px 12px;
    border-radius: 10px;
    margin: 60px auto;

    @media (max-width: 786px) {
      width: 80%;
    }

    input {
      background: none;
      border: none;
      outline: none;
    }

    button {
      background-color: ${colors.primary};
      border: none;
      outline: none;
      color: white;
      padding: 16.5px 25px;
      border-radius: 5px;
    }
  }

  .app__connect {
    background-color: #039be510;
    width: fit-content;
    padding: 8px;
    border-radius: 8px;
    font-size: 15px;
    color: #039be5;
    margin: 32px auto;

    p {
      display: flex;
      align-items: center;
      gap: 7px;
    }
  }
`;
