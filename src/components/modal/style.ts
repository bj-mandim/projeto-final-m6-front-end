import styled from "styled-components";

export const StyleModal = styled.div`
	position: absolute;
	top: 70px;
	z-index: 900;
	padding: 1rem;
	background-color: #1e1c1c9e;
	width: 100vw;
	height: auto;


	& > div {
		margin: 0 auto;
		margin-bottom: 50px;
		background-color: var(--whiteFixed);
		padding: 0 1.5rem;
		gap: 2rem;
	}
`;