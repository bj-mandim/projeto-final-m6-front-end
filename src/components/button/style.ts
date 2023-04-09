import styled from "styled-components";

export const Button = styled.button`
  height: 48px;
  padding: 0 1.5rem;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  color: #ffffff;
  border-radius: 4px;
  background: var(--brand1);
  border: 1px solid var(--brand1);
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #fff;
    border: 1px solid;
  }
`;