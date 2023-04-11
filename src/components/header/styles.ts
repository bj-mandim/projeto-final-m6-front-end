import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  background: #fdfdfd;
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
    }
  }

  /*

    padding: 0px 64px;

    .categories {
        display: none;
    }

    .content-menu {
        padding: 24px 0px 24px 16px;
        border-left: 1px solid #DEE2E6;

        .btnGroup {
            display: flex;
        }
    } */
`;

export default HeaderContainer;
