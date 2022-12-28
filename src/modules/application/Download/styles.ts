import styled from "styled-components"
import { colors } from "@components/application/Theme"

export const Grid = styled.div`
  display: flex;
  margin-top: 23px;
  gap: 12px;

  a {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }

  .grid__item {
    display: flex;
    gap: 24px;
    border-radius: 24px;
    padding: 18px 24px;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    @media (max-width: 480px) {
      flex-direction: row;
    }

    img {
      width: 27px;
      height: 30px;
    }

    p:nth-child(1) {
      font-size: 12px;
    }
    p:nth-child(2) {
      font-size: 16px;
      font-weight: 500;
    }
  }
`
