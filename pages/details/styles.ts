import styled from "styled-components"
import { colors } from "@components/application/Theme"
import resp from "@utils/resp"

export const Container = styled.div`
  position: relative;
  color: #212121;

  .page__back {
    padding: 30.25px 0 25.75px 16px;
    font-size: 14px;
    border: 1px solid #e6e6e6;

    span {
      margin-right: 12px;
    }
  }

  .stake__header {
    display: flex;
    justify-content: space-between;
    padding: 28px 16px;
    border: 1px solid #e6e6e6;

    p {
      &:nth-child(1) {
        font-family: "Rubik-Bold";
        font-size: 16px;
      }
      &:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 13px;
        font-size: 14px;

        span {
          font-size: 20px;
        }
      }
    }
  }

  .data__section {
    width: 100%;

    &__img {
      img {
        width: 100%;
        object-fit: cover;
      }
    }

    &__dets {
      display: flex;
      justify-content: space-between;
      padding: 40px 26px 39px 16px;
      align-items: center;
      background-color: #f8f8f5;

      &__left {
        p {
          &:nth-child(1) {
            font-family: "Rubik-Bold";
            font-size: 18px;
            margin-bottom: 2px;
          }
          &:nth-child(2) {
            font-size: 12px;
          }
        }
      }

      &__right {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;

        p {
          &:nth-child(1) {
            font-family: "Rubik-Bold";
            font-size: 32px;
          }
          &:nth-child(2) {
            font-size: 10px;

            span {
              font-family: "Rubik-Bold";
            }
          }
        }
      }
    }

    &__main {
      &__toggle {
        display: flex;

        .toggle__active {
          flex: 0.33;
          text-align: center;
          padding: 26.5px 0;
          border: 1px solid #f8f8f5;
          border-bottom: 6px solid #ffd800;
        }
        .toggle__disabled {
          flex: 0.33;
          text-align: center;
          padding: 26.5px 0;
          border: 1px solid #f8f8f5;
        }
      }

      &__bio {
        padding: 49px 16px;
        font-size: 14px;
        line-height: 24px;
      }

      &__mani {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 45px 16px;

        .list__item {
          background-color: #f8f8f5;
          border-radius: 8px;
          padding: 23px 21px 20px 20px;
          display: flex;
          gap: 18px;

          p {
            font-family: "Rubik-Bold";
            font-size: 14px;
          }

          &__dets {
            h3 {
              font-family: "Rubik-Bold";
              font-size: 14px;
              margin-bottom: 6px;
            }

            p {
              font-size: 14px;
              font-family: "Rubik-Regular";
              line-height: 20px;
            }
          }
        }
      }

      &__inter {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 39px 16px;

        .video__tabs {
          height: 200px;
          width: 100%;
          background-color: #d6d6d6;
        }
      }
    }

    &__stake {
      padding: 48.5px 16px;

      p {
        font-size: 14px;
        margin-bottom: 28.5px;
      }

      .stake__options {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
        padding-right: 18px;

        &__item {
          border: 1px solid #e8e8e8;
          background-color: #f8f8f5;
          height: fit-content;
          /* width: 33%;
          font-family: "Rubik-Bold";
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto; */
        }
      }
    }
  }

  .stake__section {
    border: 1px solid #d6d6d6;
    padding: 39px 16px;
  }
`
