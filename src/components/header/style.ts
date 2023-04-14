import styled from "styled-components";

export const HeaderWrapper = styled.header`
  #menu-mobile {
    box-shadow: 0px 0px 40px 0px #000000bf;

    @media (min-width: 767px) {
      display: none;
    }

    #categories {
      margin: 0px;
      padding: 32px 24px;
      display: flex;
      flex-direction: column;
      gap: 44px;

      li {
        list-style-type: none;

        a {
          color: var(--grey2);
        }
      }
    }

    #nav-mobile {
      border-top: 1px solid var(--grey4);
      padding: 32px 24px;
      text-align: left !important;
      display: flex;
      flex-direction: column;
      gap: 44px;

      .btn-link {
        text-align: left;
      }
    }
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  background: var(--grey10);
  border-bottom: 2px solid #dee2e6;
  z-index: 9999;
  position: relative;

  @media (min-width: 767px) {
    #nav {
      border-left: 1px solid var(--grey6);
      padding: 24px 0;
    }
  }

  #menu-desktop {
    display: flex;
    padding: 0 0.5rem;
  }

  #button-mobile {
    display: none;
    outline: none;
    border: none;
    background-color: transparent;
  }

  @media (max-width: 768px) {
    padding-top: 24px;
    padding-bottom: 24px;

    #menu-desktop {
      display: none;
    }

    #button-mobile {
      display: block;

      .hamburger-icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`;
