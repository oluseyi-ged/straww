import styled from 'styled-components';
import { colors } from '@components/application/Theme';
import resp from '@utils/resp';

export const Container = styled.div`
  width: 150px;

  .custom__dropdown {
    position: relative;
  }

  .custom__dropdown__selection {
    display: flex;
    background-color: ${({ theme }) => theme.cardBg};
    padding: 13px 19px;
    cursor: pointer;
    border-radius: 10px;
    position: relative;
  }

  .custom__dropdown__selection.visible::after {
    transform: rotate(135deg);
  }

  .custom__dropdown__selection:after {
    display: block;
    content: '';
    height: 6px;
    width: 6px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    transform: rotate(-45deg);
    position: absolute;
    right: 10px;
    top: 18px;
  }

  .item__holder {
    background-color: ${({ theme }) => theme.cardBg};
    padding: 13px 19px;
    position: absolute;
    margin-top: 10px;
  }

  .dropdown__item {
    width: 110px;
    /* width: inherit; */
    cursor: pointer;
  }

  .dropdown__item {
    margin: 0 auto;
    padding-bottom: 10px;
    color: ${({ theme }) => theme.text};
    font-size: 18px;
  }
`;
