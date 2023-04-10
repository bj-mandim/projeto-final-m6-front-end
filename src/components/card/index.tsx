import { StyledCards } from "./style";

const Card = (getCars: any, user: any) => {
  return getCars.map((car: any) => {
    <>
      <StyledCards>
        <li>
          <h1>{car.is_active}</h1>
          <img src={car.img} alt={getCars} />
          <h1>
            {car.brand} - {car.model}
          </h1>
          <p>{car.description}</p>
          <img src={user.img} alt={user} />
          <p>{user.name}</p>
          <p>{car.km}</p>
          <span>{car.year}</span>
          <span>{car.price}</span>
        </li>
      </StyledCards>
    </>;
  });
};

export default Card;
