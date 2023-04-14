import styled from "styled-components";

export const Containerfooter= styled.footer`
  width: 100%;

  .footer-wrapper {
    background-color: var(--grey0);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 45px 3rem;

    * {
      margin: 0;
    }

    .backToTop {
      display: flex;
      justify-content: center;
      border-radius: 9px;
      align-items: center;
      width: 50px;
      height: 50px;
      background-color: var(--grey1);
      color: white;

      &:hover {
        background-color: var(--grey2);
      }
    }
  }

  @media screen and (max-width: 767px) {
    .footer-wrapper {
      gap: 60px;
      flex-direction: column;
    }
  }
`;

