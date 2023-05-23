import styled from "styled-components";

export const WriteBox = styled.form`
	margin-top: 16px;
	border-radius: 4px;
	border: 2px solid var(--grey7);
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: end;
	gap: 8px;

	textarea {
		border: none;
		padding: 0;

		&:focus, &:hover {
			outline: none;
			border: none;
		}
	}

	&:hover {
		border: 2px solid var(--grey4);
	}
`;