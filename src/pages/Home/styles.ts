import styled from "styled-components";

export const HomeContainer = styled.main`
    display: flex;
	flex-direction: row;
    padding: 52px 0;
    gap: 40px;
	align-items: flex-start;
	max-width: 95%;
    margin: 0 auto;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column-reverse;
        padding: 52px 24px;
		max-width: 100%;
		align-items: center;
	}
`;