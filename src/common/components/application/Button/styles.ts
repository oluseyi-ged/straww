import styled from "styled-components"
import { colors } from "@components/application/Theme"
import resp from "@utils/resp"

export const Container = styled.div`
  width: 100%;

  .btn__container {
    padding: 15px 40px;
    font-size: 0.9rem;
    background-color: ${({ theme }) => theme.primary};
    border: none;
    outline: none;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;

    button {
      border: none;
      outline: none;
      background-color: transparent;
      color: ${({ theme }) => theme.text};
      font-size: 14px;
      width: 100%;
      text-align: center;
    }
  }
`
