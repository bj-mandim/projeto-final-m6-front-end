import styled from "styled-components";

export const ProfileWrapper = styled.section`
  /*   width: 90%; */
  background: var(--grey10);
  border-radius: 4px;
  padding: 48px 40px;

  .anunciante {
    margin: 0 0 40px 0;

    &-img {
      width: 104px;
      height: 104px;
      border-radius: 100%;
      object-fit: cover;
      margin-bottom: 24px;
    }

    &-nome {
      display: flex;
      align-items: center;
      gap: 8px;

      h3 {
        color: var(--grey1);
        margin: 0;
      }
    }

    &-status {
      background: var(--brand4);
      border-radius: 4px;
      display: block;
      padding: 4px 8px;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: var(--brand1);
    }

    &-descricao {
      color: var(--grey2);
    }
  }
`;
