import styled from "styled-components";

export const Div = styled.div`
	max-width: 878px;
	border-radius: 4px;
	background-color: var(--whiteFixed);
	padding: 20px;
	margin-bottom: 30px;

  .comment{
		font-family: 'Inter';
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		gap: 20px;
		width: 100%
  }

	span {
		align-self: center;
		color: var(--grey2);
		font-size: 11px;
	}

	h3 {
		margin-top: 5px;
		height: 40px;
		width: 160px;
		text-overflow: ellipsis;
		overflow-x: hidden;
	}

	p {
		font-family: 'Inter';
		margin-top: 10px;
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		width: 100%;
		height: 70px;
	}

	
  img	{
		width: 50px;
		height: 50px;
		border-radius: 50px;
	}
	
`;