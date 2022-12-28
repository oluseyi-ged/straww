import styled from "styled-components"
import { colors } from "@components/application/Theme"

export const Container = styled.div`
  background-color: #162e38;
  padding: 4.811rem 8.563rem;
  display: flex;
  color: #fff;
  flex-wrap: wrap;
  margin-top: 300px;

  @media (max-width: 1204px) {
    gap: 50px;
    padding: 50px;
  }

  h5 {
    font-size: 16px;
    font-family: "Rubik-Bold";
    margin-bottom: 32px;
    text-transform: uppercase;
  }

  p {
    margin-bottom: 26px;
    font-size: 12px;
    font-weight: normal;
    cursor: pointer;
  }

  .footer {
    &__logo {
      width: 20%;
    }

    &__links {
      display: flex;
      flex-wrap: wrap;
      gap: 200px;
      margin-bottom: 60px;

      @media (max-width: 771px) {
        gap: 100px;
      }
    }

    &__last {
      gap: 150px;
      display: flex;
      flex-wrap: wrap;

      @media (max-width: 685px) {
        gap: 20px;
      }
    }
  }

  .app__subscribe {
    background-color: #ffffff10;
    width: 474px;
    max-width: calc(100% - 50px);
    /* height: 64px; */
    display: flex;
    justify-content: space-between;
    padding: 13px 12px;
    border-radius: 12px;

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
`
