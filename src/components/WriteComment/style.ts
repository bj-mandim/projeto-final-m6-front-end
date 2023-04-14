import styled from "styled-components";

export const Div = styled.div`
	padding: 20px;
	margin-bottom: 30px;
	border-radius: 4px;
	background-color: var(--whiteFixed);

  .profile{
		font-family: 'Inter';
		display: flex;
        flex-wrap: nowrap;
		align-items: center;
		flex-direction: row;
		gap: 20px;
		width: 100%
  }

	span {
		align-self: center;
		color: var(--grey-2);
		font-size: 11px;
	}

	h3 {
		text-overflow: ellipsis;
		overflow-x: hidden;
	}

	.writer-box{
		margin-top: 30px;
		border-radius: 4px;
		border: 2px solid var(--grey7);
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: end;
		gap: 16px;

		textarea {
			border: none;
			padding: 0;
		}
  }
`;