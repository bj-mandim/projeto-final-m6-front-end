import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  background: #fdfdfd;
  border-bottom: 2px solid #dee2e6;

  padding: 0px 64px;

  .categories {
    display: none;
  }

  .content-menu {
    padding: 24px 0px 24px 16px;
    border-left: 1px solid #dee2e6;

    .btnGroup {
      display: flex;
    }
  }
`;

export default Nav;
