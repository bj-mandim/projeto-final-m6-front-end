import styled from "styled-components";

export const CardsList = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;

  @media (max-width: 767px) {
    flex-wrap: nowrap;
    gap: 16px;
    overflow: scroll;
    align-self: flex-start;
    max-width: 100%;
  }
`;

export const StyledCards = styled.figure`
  position: relative;
  overflow: hidden;
  max-width: 312px;
  margin: 0;

  font-family: "Lexend";

  @media (max-width: 767px) {
    margin: 24px auto;
    width: 100%;
    flex: 0 0 100%;
    max-width: 288px;
  }

  p {
    margin-bottom: 8px;
    margin-top: 8px;
  }

  .boxImage {
    width: 100%;
    background-color: var(--grey7);

    img {
      margin: 0 auto;
      width: 100%;
      height: 140px;
      object-fit: cover;
    }
  }

  .status {
    position: absolute;
    top: 11px;
    left: 16px;
    line-height: 1.4rem;
    padding: 1px 0.5rem;
    font-size: 14px;

    &#ativo {
      background-color: var(--brand1);
      color: #fff;
    }

    &#inativo {
      background-color: var(--grey4);
      color: #fff;
    }
  }

  .moneySign {
    background: var(--green1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    padding: 4px;
  }

  .description {
    h3 {
      color: var(--grey1);
      font-weight: 600;
    }

    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      color: var(--grey2);
    }
  }

  .boxUser {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      object-fit: cover;
    }

    p {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--grey2);
    }
  }

  .boxExtraInfo {
    display: flex;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;

    .boxFilterInfo {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
      gap: 0.3rem;

      li {
        background-color: var(--brand4);
        color: var(--brand1);
        font-size: 0.875rem;
        padding: 4px 8px;
      }
    }

    .price {
      color: var(--grey1);
      font-weight: 600;
    }
  }
`;
