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
		width: 32px;
		height: 32px;
		border-radius: 50%;
		object-fit: cover;
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
