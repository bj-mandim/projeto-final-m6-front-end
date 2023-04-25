import styled from "styled-components";

export const Form = styled.form`
  background: var(--grey10);
  border-radius: 4px;
  padding: 44px 48px;
  width: 100%;
  max-width: 412px;
  margin: 15vh auto;

  @media screen and (max-width: 767px) {
    width: 80%;
  }

  @media screen and (max-width: 767px) {
    width: 60%;
  }

  .inline-fields {
    display: flex;
    gap: 16px;

    div {
      width: 48%;
    }
  }

  .forgot-pass {
    display: block;
    text-align: right;
    font-weight: 500;
    font-size: var(--body2-size);
    line-height: 24px;
    color: var(--grey2);
    text-decoration: none;
    margin-top: 8px;
    margin-bottom: 24px;
  }

  .extra-text {
    text-align: center;
    color: var(--grey2);
    font-size: var(--body2-size);
    line-height: 24px;
    margin: 24px 0;
  }

  .white_btn {
    font-family: "Inter";
    font-size: 14px;
    font-weight: 600;
    height: 48px;
    width: 100%;
    color: var(--grey0);
    border: 2px solid var(--grey6);
    background-color: var(--grey10);
    border-radius: 8px;
    cursor: pointer;
    :hover {
      background-color: var(--brand1);
      color: var(--whiteFixed);
      border: 2px solid var(--grey6);
    }
  }

  .white_btn:focus {
    background-color: var(--brand1);
    color: var(--grey10);
    border: none;
    border-radius: 4px;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: row;
  gap: 10%;
  position: relative;
`;

export const FormModal = styled.form`
  background: var(--grey10);
  border-radius: 4px;
  padding: 20px;
  width: 100%;
  max-height: 70vh;
  overflow-y: scroll;
  margin-top: 50px;

  .modal-wrapper {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 767px) {
    width: 85%;
  }

  .inline-fields {
    display: flex;
    gap: 16px;

    div {
      width: 48%;
    }
  }

  .forgot-pass {
    display: block;
    text-align: right;
    font-weight: 500;
    font-size: var(--body2-size);
    line-height: 24px;
    color: var(--grey2);
    text-decoration: none;
    margin-top: 8px;
    margin-bottom: 24px;
  }

  .extra-text {
    text-align: center;
    color: var(--grey2);
    font-size: var(--body2-size);
    line-height: 24px;
    margin: 24px 0;
  }

  .white_btn {
    font-family: "Inter";
    font-size: 14px;
    font-weight: 600;
    height: 48px;
    width: 100%;
    color: var(--grey0);
    border: 2px solid var(--grey6);
    background-color: var(--grey10);
    border-radius: 8px;
    cursor: pointer;
    :hover {
      background-color: var(--brand1);
      color: var(--whiteFixed);
      border: 2px solid var(--grey6);
    }
  }

  .white_btn:focus {
    background-color: var(--brand1);
    color: var(--grey10);
    border: none;
    border-radius: 4px;
  }
`;
