import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    background: #FDFDFD;
    border-bottom: 2px solid #DEE2E6;

    padding: 0px 64px;

    .categories {
        display: none;
    }

    .content-menu {
        padding: 24px 0px 24px 16px;
        border-left: 1px solid #DEE2E6;

        .btnGroup {
            display: flex;
        }
    }
`;

export default HeaderContainer;