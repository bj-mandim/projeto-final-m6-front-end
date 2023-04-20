import styled from "styled-components";

export const FilterContainer = styled.aside`

    @media (min-width: 767px) {
        #openFilter {
            display: none;
        }
    }
`;

export const FilterGroupWrapper = styled.main`
    max-width: 370px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;

    @media (min-width: 767px) {
        min-width: 370px;
    }

    .filter-header-mob {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        svg {
            cursor: pointer;
        }

        @media (min-width: 600px) {
            display: none;
        }
    }

    @media (max-width: 767px) {
        position: fixed;
        top: 0;
        bottom: 0;
        right: -110%;
        max-width: 100%;
        z-index: 99;

        background: #fff;
        padding: 10vh 16px 10vh;
        overflow: auto;

        &#close {
            right: -110%;
        }

        &#show {
            right: 0%;
        }
    }
`;

export const FilterGroup = styled.div`
    h3 {
        margin-bottom: 16px;
        color: var(--grey0);
        margin-top: 0;
	}

    @media (max-width: 767px) {
        padding: 0 16px;
    }
`;

export const FilterList = styled.ul`
    list-style-type: none;
    padding-left: 16px;
    li {
        color: var(--grey3);
        font-weight: 600;
        padding: 4px 0;
        cursor: pointer;

        &:hover {
            color: var(--brand2);
        }

        &:focus {
            color: var(--brand1);
            font-weight: bolder;
        }
    }
`;

export const InputGroup = styled.div`
    display: flex;
    gap: 24px;

    input[type=text] {
        width: 100%;
        font-weight: 600;
        font-size: 18px;
        line-height: 20px;
        text-align: center;
        min-height: 37px;
        border-style: none;
        background-color: var(--grey5);

        &::placeholder {
            font-weight: bold;
        }
	}
`;