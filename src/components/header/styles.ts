import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    background: var(--grey10);
    border-bottom: 2px solid var(--grey6);

    padding: 0px 64px;

    .categories {
        display: none;
    }

    .content-menu {
        padding: 24px 0px 24px 16px;
        border-left: 1px solid var(--grey6);

        .btnGroup {
            display: flex;
        }
    }
`;

export default HeaderContainer;