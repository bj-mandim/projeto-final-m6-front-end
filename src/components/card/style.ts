import styled from "styled-components";

export const StyledCards = styled.div`
  position: relative;
  background-color: white;
  width: 19.5rem;
  height: 21.875rem;
  display: flex;
  flex-direction: column;

  .boxImage {
    display: flex;
    width: 100%;
    height: 9.5rem;
    background-color: var(--grey7);

    img {
      width: 16.375rem;
      height: 9.393rem;
      margin: 0 auto;
    }
    
    .statusCar {
      position: absolute;
      top: 11px;
      left: 16px;
      width: 3.188rem;
      height: 1.5rem;
      background-color: var(--brand1);
      line-height: 1.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 0.3rem;
      color: #fff;
    }
  }
  

  .descriptionCar {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h1 {
      color: var(--grey1);
      font-size: 1rem;
      font-weight: 600;
    }

    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      color: var(--grey2)
    }
  }

  .boxUser{
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
    }

    h2 {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--grey2)
    }
  }

  .boxKmYearPrice {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
  }

  .kmYear {
    display: flex;
    align-items: center;
    gap: 0.3rem;

    span{
      background-color: var(--brand4);
      color: var(--brand1);
      font-size: 0.875rem;
      padding: 4px 8px;
    }
  }

  .priceCar {
    font-size: 1rem;
  }
`;
