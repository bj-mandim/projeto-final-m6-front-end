import styled from "styled-components";

export const Div = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 20px;

  section {
  	display: flex;
  	flex-direction: column;
	}

	h3 {
	color: var(--grey0);
	font-family: "inter";
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    margin-bottom: 7px;
	}

 	p {
    line-height: 35px;
    color: var(--grey3);
    font-family: "inter";
    font-weight: 500;
    font-size: 20px;
   
	}

	section div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: var(--grey3);
	}

	input {
    width: 47%;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    height: 37px;
    border-style: none;
    background-color: var(--grey5);
    font-family: "inter";
    
	}
`;