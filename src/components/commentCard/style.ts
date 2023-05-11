import styled from "styled-components";

export const CommentWrapper = styled.section`
  margin-bottom: 24px;

  .profile-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .profile-timeline {
    color: var(--grey2);
    font-size: 11px;
    white-space: nowrap;
  }

  @media (max-width: 767px) {
    .flex-direction-mob {
      flex-direction: column;
    }
  }
`;
