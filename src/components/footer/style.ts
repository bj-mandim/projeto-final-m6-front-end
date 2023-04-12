import styled from "styled-components";

export const Containerfooter= styled.footer`
  width: 100%;
  div {
    background-color: var(--grey0);
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
  }
  a {
    display: flex;
    justify-content: center;
    border-radius: 9px;
    align-items: center;
    width: 35px;
    height: 35px;
    background-color: var(--grey1);
    color: white;
    padding-top: 5px;
    text-decoration: none;
    padding-left: 3px;
    padding-right: 3px;
    :hover {
      color: white;
    }
  }
  @media screen and (max-width: 425px) {
    div {
      gap: 5px;
      flex-direction: column;
    }
  
  }

  @media screen and (max-width: 660px) {
    
    div{
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: space-evenly;
      align-items: center;
      height: 160px;
    }

    section {
      margin-right: 0px;
    }

    p {
      font-size: 14px;
    }
    
    a{
      margin-right: 0px;
    }
  }

  @media screen and (max-width: 320px) {
    p {
      font-size: 12px;
    }
  }
`;

