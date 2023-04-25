import styled from "styled-components";

export const StyleModal = styled.div`
  position: absolute;
  top: 70px;
  z-index: 900;
  padding: 1rem;
  background-color: #1e1c1c9e;
  width: 100%;
  height: auto;

  .container-form {
    width: 100%;
    padding: 25px 0;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding: 0;
    top: 80px;
  }

  & > div {
    width: 60%;
    margin: 0 auto;
    margin-bottom: 50px;
    background-color: var(--whiteFixed);
    padding: 0 1.5rem;
    gap: 2rem;

    @media (max-width: 600px) {
      width: 85%;
      height: auto;
      background-color: black;
      margin: 0 auto;
    }
  }
`;
