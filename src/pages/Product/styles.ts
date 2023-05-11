import styled from "styled-components";

export const Section = styled.section`
  width: 100%;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    min-height: 500px;
    background: var(--brand1);

    @media (max-width: 768px) {
      min-height: 400px;
    }
  }
`;

export const Article = styled.article`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1400px;
  gap: 48px;
  padding-top: 64px;
  padding-bottom: 64px;
  z-index: 1;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px;

  @media (min-width: 767px) {
    flex: 0 0 70%;
    max-width: 768px;
    margin-bottom: 24px;
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 0 16px;

  @media (min-width: 600px) {
    flex: 0 0 30%;
  }
`;

export const Modal = styled.div`
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .modal-wrapper {
    width: 100%;
    max-width: 500px;
    background-color: white;
    border-radius: 5px;
    padding: 1rem;
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: x-large;
      border: none;
      color: var(--grey4);
      background-color: transparent;
    }
  }

  .modal-img {
    background-color: var(--grey6);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 300px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const WhiteSection = styled.section`
  padding: 44px;
  border-radius: 4px;
  background-color: var(--whiteFixed);
  font-family: "Inter";
  width: -webkit-fill-available;

  @media (max-width: 767px) {
    padding: 24px;
  }

  &.principal-img {
    padding: 0px;
    display: flex;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
    max-height: 355px;

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }

  h3 {
    margin-top: 0;
    margin-bottom: 32px;
  }

  p {
    color: var(--grey2);
  }

  .small-images {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 16px;

    @media (max-width: 768px) {
      gap: 8px;
    }

    img {
      background-color: var(--grey8);
      width: 30%;
      height: auto;
      min-height: 100px;
      object-fit: cover;
      overflow: hidden;
      border-radius: 4px;
    }
  }
`;

export const PrimerInfo = styled.span`
  background-color: var(--brand4);
  color: var(--brand2);
  border-radius: 4px;
  padding: 6px;
`;
