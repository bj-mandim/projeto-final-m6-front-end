import styled from "styled-components";

export const Section = styled.section`
	width: 100%;

	&:before {
		content: "";
		position: absolute;
		width: 100%;
		display: block;
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
	z-index: 1;
	position: relative;

	@media (max-width: 768px) {
		flex-direction: column;
		padding-left: 16px;
		padding-right: 16px;
	}
`;

export const Main = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 600px) {
		flex: 0 0 70%;
		max-width: 768px;
	}

	@media (max-width: 768px) {
	}
`;

export const SecondMain = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 30px;
	gap: 30px;

	@media (min-width: 600px) {
		flex: 0 0 30%;
	}

	@media (max-width: 768px) {
		margin-top: 0px;
	}
`;

export const Figure = styled.figure`
	height: 260px;
	background-color: var(--grey10);
	border-radius: 4px;
	text-align: center;
	margin: 0;

	img {
		width: 100%;
		max-width: 470px;
		min-width: 260px;
	}
`;

export const Div = styled.div`
	border-radius: 4px;
	background-color: var(--whiteFixed);
	margin-top: 30px;
	padding: 20px;

	h3 {
		height: 80px;
		width: 100%;
		text-align: center;
		margin: 0 auto;
		text-overflow: ellipsis;
		overflow-x: hidden;
	}

	.container-infos {
		width: 100%;
	}

	.priceAndSpan {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-family: "Inter";
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
	}
	.span {
		font-family: "Inter";
		display: flex;
		flex-direction: row;
		width: 50%;
		gap: 20px;
	}

	.price {
		font-family: "Inter";
		width: 100px;
	}

	span {
		width: 70px;
		height: 28px;
		display: flex;
		justify-content: space-around;
		background-color: var(--brand4);
		color: var(--brand2);
		padding-top: 5px;
		border-radius: 4px;
	}
`;

export const DivDescription = styled.div`

	border-radius: 4px;
	background-color: var(--whiteFixed);
	margin-top: 30px;
	padding: 20px;
	margin-bottom: 30px;

	h3 {
		height: 40px;
		width: 500px;
		text-overflow: ellipsis;
		overflow-x: hidden;
	}

	p {
		font-family: "Inter";
		color: var(--grey2);
		width: 100%;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		height: 130px;
		text-overflow: ellipsis;
		overflow-x: hidden;
	}
`;

export const Aside = styled.aside`
	border-radius: 4px;
	background-color: var(--whiteFixed);
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 30px;

	.small-images {
		display: flex;
		flex-wrap: wrap;
		justify-content: stretch;
		gap: 10px;

		img {
			background-color: var(--grey8);
			width: 30%;
			height: auto;
			min-height: 100px;
			object-fit: contain;
		}
	}

	.defaultphoto {
		width: 60px;
		height: 60px;
		border-radius: 50px;
	}

	@media (max-width: 900px) {

		.small-images {
			align-self: center;
			justify-content: center;
		}
	}
`;

export const SecondAside = styled.aside`
	border-radius: 4px;
	background-color: var(--whiteFixed);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
	padding: 15px;

	img {
		width: 60px;
		height: 60px;
		border-radius: 50px;
	}
	p {
		font-family: "Inter";
		height: 1-00px;
		text-align: center;
		margin: 0 auto;
		font-style: normal;
		font-weight: 400;
		font-size: 15px;
		color: var(--grey2);
	}

	button {
		width: 206px;
		height: 48px;
		background-color: var(--grey0);
		color: var(--whiteFixed);
		border-radius: 4px;
		border: none;
	}

	@media (max-width: 370px) {

		button {
			width: 150px;
			background-color: var(--grey0);
			color: var(--whiteFixed);
			border-radius: 4px;
			border: none;
		}
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