import styled from "styled-components"

const Nav = styled.div`
  position: relative;

  .navbar {
    align-self: center;
    /* padding: 20px 164px; */
    min-height: 4vh;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;

    &__identity {
      background-color: #ffd800;
      padding: 26px 18px;
      font-family: "Rubik-Bold";
    }

    &__avi {
      padding: 27px 20px;
    }
  }
`
export default Nav
