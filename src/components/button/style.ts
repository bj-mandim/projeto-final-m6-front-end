import styled from "styled-components";

export const Button = styled.button`
  height: 48px;
  padding: 0 1.5rem;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  color: #ffffff;
  border-radius: 4px;
  background: #4529E6 ;
  border: 1.5px solid #4529E6;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #fff;
    border: 1px solid;
  }
`;