import styled from "styled-components";

export const Navegador = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 40px;

    margin-top: 40px;
    margin-bottom: 72px;
    font-family: 'Lexend';

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 32px;
        margin-top: 0px;
        margin-bottom: 48px;
    }

    .page-link, .page-item {
        font-size: var(--heading5-size);
        line-height: 30px;
        font-weight: 600;
        color: var(--grey3);
        text-decoration: none;
    }

    .page-link {
        color: var(--brand1);

        &:not(.active):hover {
            color: var(--brand1);
        }
    }

    .pagination {
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 0;
        margin: 0;

        .page-link {
            color: var(--grey3);
            opacity: 0.5;

            &.active, &:hover {
                opacity: 1;
            }
        }
    }
`;