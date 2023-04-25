import styled from "styled-components";

export const Section = styled.section`
  width: 100%;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    display: block;
    min-height: 300px;
    background: var(--brand1);

    @media (max-width: 768px) {
      min-height: 308px;
    }
  }
`;

export const Article = styled.article`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1400px;
  gap: 48px;
  padding-top: 64px;
  z-index: 1;
  position: relative;

  @media (max-width: 768px) {
    width: 85%;
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
