import styled, { css } from "styled-components";

interface iButtonProps {
  medium?: boolean;
  model?: string;
  widths?: number;
}

const Button = styled.button<iButtonProps>`
  outline: none;
  border: 1px solid;
  border-radius: 4px;
  font-weight: 600;
  display: block;
  text-align: center;
  line-height: 0px;
  cursor: pointer;
  text-decoration: none;
  transition: all 300ms ease-in-out;
  width: ${({ widths }) => (widths ? `${widths}%` : "fit-content")};

  ${({ medium }) =>
    !medium
      ? css`
          padding: 24px 28px;
          font-size: var(--button-big-text-size);
        `
      : css`
          padding: 12px 20px;
          font-size: var(--button-medium-text-size);
        `}

  ${({ model }) => {
    switch (model?.toLowerCase()) {
      case "model-1":
        return css`
          background: var(--grey0);
          border-color: var(--grey0);
          color: #ffffff;

          &:hover {
            background: var(--grey1);
            border-color: var(--grey1);
          }
        `;
      case "model-2":
        return css`
          background: var(--grey6);
          border-color: var(--grey6);

          &:hover {
            background: var(--grey5);
            border-color: var(--grey5);
          }
        `;

      case "max_min_filter":
        return css`
          background: var(--grey5);
          border-color: var(--grey5);
          color: var(--grey2);

          &:hover {
            background: var(--brand1);
            border: 1px solid var(--brand1);
          }
        `;

      case "model-4":
        return css`
          background: var(--brand2);
          border-color: var(--brand2);
          color: #ffffff;

          &:hover {
            background: var(--brand4);
            border-color: var(--brand4);
            color: var(--brand1);
          }
        `;

      case "model-5":
        return css`
          background: var(--grey10);
          border-color: var(--grey10);
        `;

      case "model-6":
        return css`
          background: var(--grey10);
          border-color: var(--grey1);

          &:hover {
            background: var(--grey1);
            border-color: var(--grey1);
            color: #ffffff;
          }
        `;

      case "model-7":
        return css`
          background: var(--grey10);
          border-color: var(--grey4);
          color: var(--grey0);

          &:hover {
            background: var(--grey1);
            border-color: var(--grey1);
            color: #ffffff;
          }
        `;

      case "model-8":
        return css`
          background: var(--grey10);
          border-color: var(--brand1);
          color: var(--brand1);

          &:hover {
            background: var(--brand4);
            border-color: var(--brand1);
            color: var(--brand1);
          }
        `;

      case "model-9":
        return css`
          background: var(--grey10);
          border-color: var(--grey10);
          color: var(--grey0);

          &:hover {
            background: var(--grey8);
            border-color: var(--grey8);
          }
        `;

      case "model-10":
        return css`
          background: var(--alert3);
          border-color: var(--alert3);
          color: var(--alert1);

          &:hover {
            background: var(--alert2);
            border-color: var(--alert2);
          }
        `;

      case "model-11":
        return css`
          background: var(--sucess3);
          border-color: var(--sucess3);
          color: var(--sucess1);

          &:hover {
            background: var(--sucess2);
            border-color: var(--sucess2);
          }
        `;

      case "option-filter":
        return css`
          background: var(--gray6);
          border-color: transparent;
          color: var(--grey3);
          text-align: start;
        `;
      case "option-modal":
        return css`
          background: var(--gray6);
          border-color: transparent;
          color: var(--grey0);
          text-align: start;
          display: flex;
          align-items: flex-start;
          padding: 0;
        `;
      case "model-12":
        return css`
          background: var(--brand3);
          border-color: var(--brand3);
          color: #ffffff;
        `;

      default:
        return css`
          background: var(--grey0);
          border-color: var(--grey0);
          color: #ffffff;

          &:hover {
            background: var(--grey1);
            border-color: var(--grey1);
          }
        `;
    }
  }}
`;

export default Button;
