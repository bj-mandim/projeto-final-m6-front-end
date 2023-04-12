import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  background: var(--grey10);
  border-bottom: 2px solid #dee2e6;

  #menu-desktop {
    display: flex;
    padding: 0 0.5rem;
  }

  #button-mobile {
    display: none;
  }

  #menu-mobile {
    display: none;
  }

  @media (max-width: 600px) {
    #menu-desktop {
      display: none;
    }

    #button-mobile {
      background-color: black;
      display: flex;
    }
  }
`;

export default HeaderContainer;
