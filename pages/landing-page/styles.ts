import styled from "styled-components"
import { colors } from "@components/application/Theme"
import resp from "@utils/resp"

export const Container = styled.div`
  position: relative;
  color: #212121;

  .page__toggler {
    display: flex;
    border: 1px solid #e6e6e6;
    /* justify-content: space-evenly; */

    .toggle__active {
      /* background: red; */
      flex: 0.5;
      padding-top: 26.5px;
      padding-bottom: 26.5px;
      text-align: center;
      border-bottom: 6px solid #ffd800;
      border-left: 0.5px solid #e6e6e6;
      border-right: 0.5px solid #e6e6e6;
      font-family: "Rubik-Bold";
      font-size: 14px;
    }
    .toggle__disabled {
      /* background: green; */
      flex: 0.5;
      padding-top: 26.5px;
      padding-bottom: 26.5px;
      text-align: center;
      border-left: 0.5px solid #e6e6e6;
      border-right: 0.5px solid #e6e6e6;
      font-size: 14px;
    }
  }

  .rates__tab {
    padding: 39px 16px;

    &__header {
      font-size: 14px;
      margin-bottom: 24px;
    }

    &__list {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 54px;

      .rates__tab__item {
        display: flex;
        justify-content: space-between;
        background: #f8f8f5;
        align-items: center;
        border-radius: 8px;
        padding: 23px 26px 20px 19px;

        &__left {
          display: flex;
          gap: 15px;

          img {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            object-fit: cover;
          }

          .item__extras {
            h4 {
              font-family: "Rubik-Bold";
              font-size: 14px;
            }

            p {
              font-size: 12px;

              &:nth-child(2) {
                margin-bottom: 24px;
              }

              span {
                font-family: "Rubik-Bold";
              }
            }
            .candidates__texts {
              margin-top: 2px;
              margin-bottom: 10px;
            }

            .canditate__extra__grid {
              display: flex;
              gap: 12px;

              .grid__item {
                border-radius: 13px;
                border: 1px solid #d8d8d8;
                background-color: #fff;
                padding: 5px 6px;
                font-size: 12px;

                p {
                  span {
                    margin-right: 5px;
                  }
                }
              }
            }
          }
        }

        &__right {
          h2 {
            font-family: "Rubik-Bold";
            font-size: 34px;
          }
        }
      }
    }

    .perf__section {
      .perf__graph {
        height: 266px;
        width: 100%;
        background-color: #f8f8f5;
        border-radius: 8px;
      }
    }
  }
`
