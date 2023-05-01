import styled from "styled-components";

interface iModalProps{
  show:boolean;
}

export const StyleModal = styled.div<iModalProps>`
  position: absolute;
  top: 100px;
  z-index: 900;
  background-color: #1e1c1c9e;
  width: 100%;
  height: 320vh;
  display: ${({ show }) => (show ? `block` : `none`)};

  .container-form {
    width: 100%;
    padding: 25px 0;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 250%;
    margin: 0 auto;
    padding: 0;
    top: 80px;
  }

  & > div {
    width: 60%;
    margin: 0 auto;
    margin-bottom: 50px;
    padding: 0 1.5rem;
    gap: 2rem;

    @media (max-width: 600px) {
      width: 80%;
      height: auto;
      margin: 0 auto;
    }
  }
`;
