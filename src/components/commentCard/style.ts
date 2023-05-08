import styled from "styled-components";

export const Section = styled.section`
  max-width: 878px;
  border-radius: 4px;
  background-color: var(--whiteFixed);
  padding: 20px;
  margin-bottom: 30px;

  .comment {
    font-family: "Inter";
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: 20px;
    width: 100%;
  }

  span {
    align-self: center;
    color: var(--grey2);
    font-size: 11px;
  }

  > p {
    font-family: "Inter";
    margin-top: 10px;
    margin-bottom: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    width: 100%;
    height: 70px;
  }

  > form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    padding-top: 0;
    gap: 0.25rem;
    width: 100%;
    margin-top: 10px;
    max-height: 70px;

    > textarea {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      height: 70px;
      padding: 0px;
    }

    > button {
      position: absolute;
      right: 0;
      top: 10;
    }
  }

  > .options--buttons {
    display: flex;
    justify-content: space-between;

    button {
      max-height: 0.5rem;
      height: 0.5rem;
      min-height: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
