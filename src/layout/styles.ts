import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  position: relative;

  @media (min-width: 768px) {
    display: none;
  }

  .link__container {
    width: 100%;
    top: 0;
    z-index: 100;
  }
`
export default Container
