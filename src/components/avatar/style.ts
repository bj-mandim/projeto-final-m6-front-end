import styled from "styled-components";

const randomColors = [
  "#E34D8C",
  "#C04277",
  "#349974",
  "#2A7D5F",
  "#6100FF",
  "#30007D",
];

const getColors = () => {
  const index = Math.floor(Math.random() * randomColors.length);
  return randomColors[index];
};

export const StyleAvatar = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
  & > img {
    max-width: 32px;
    max-height: 32px;
    border-radius: 50%;
  }
  & > div {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${getColors()};
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--whiteFixed);
    font-weight: 600;
    line-height: 24px;
    font-size: 14px;
  }
`;

export const StyleAvatarUserAdminPage = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
  & > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  & > div {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
    border-radius: 50%;
    background-color: ${getColors()};
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--whiteFixed);
    font-weight: 600;
    line-height: 24px;
    font-size: 50px;
  }
`;

export const SmallAvatar = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
  & > div {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${getColors()};
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--whiteFixed);
    font-weight: 600;
    line-height: 24px;
    font-size: 14px;
  }
`;
