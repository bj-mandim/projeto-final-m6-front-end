import styled from "styled-components";

const MainPages = styled.div`
  height: 300vh;

  .background-color {
    height: 40vh;
    background-color: var(--brand1);
    position: relative;
    z-index: -1;
  }

  .container-data {
    width: 100%;
    height: 260vh;
    position: absolute;
    top: 150px;
  }

  .generalContainer {
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }

  .dataAdmin {
    padding: 2rem;
    border-radius: 8px;
    height: 18rem;
    background-color: var(--grey9);

    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      object-fit: cover;
    }

    div {
      width: 15rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  .list-cards-Admin {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
  }

  .card-Admin {
    width: 23.5%;
    background-color: var(--grey9);
    border-radius: 8px;
    div {
      padding: 10px 0;
    }

    img {
      width: 100%;
      height: 30%;
      object-fit: cover;
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
    }

    p {
      display: -webkit-box;
      margin: 10px 0 15px 0;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      color: var(--grey2);
    }
  }

  @media (max-width: 660px) {
    .dataAdmin {
      padding: 2rem;
      border-radius: 8px;
      height: 18rem;

      div {
        width: 15rem;
        height: 5rem;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
      }

      p {
        display: -webkit-box;
        margin: 10px 0 15px 0;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        color: var(--grey2);
      }
    }
  } ;
`;

export default MainPages;
