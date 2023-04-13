import { StyledCards } from "../../../components/card/style";

interface iCardProps {
  getCars: car[];
}

interface car {
  is_active: boolean;
  brand: string;
  model: string;
  description: string;
  km: number;
  year: number;
  price: string;
  img_car: string;
  user: any;
}

const Card = ({ getCars }: iCardProps) => {
  return (
    <>
      {getCars.map((car) => {
        return (
          <>
            <StyledCards>
              <div className="boxImage">
                <img src={car.img_car} alt="car-image" />
                <span className="statusCar">Ativo</span>
              </div>
              <div className="descriptionCar">
                <h1>{car.model}</h1>
                <p>{car.description}</p>
                <div className="boxUser">
                  <img src={car.user.img_user} alt="user-photo" />
                  <h2>{car.user.name}</h2>
                </div>
                <div className="boxKmYearPrice">
                  <div className="kmYear">
                    <span className="KMCar">{`${car.km} KM`}</span>
                    <span className="yearCar">{car.year}</span>
                  </div>
                  <span className="priceCar">{`R$: ${car.price}`}</span>
                </div>
              </div>
            </StyledCards>
          </>
        );
      })}
    </>
  );
};

export default Card;

{
  /* <h1>{car.is_active}</h1>
            <h1>
              {car.brand} - {car.model}
            </h1>
            <p>{car.description}</p>
            
            <p>{car.km}</p>
            <span>{car.year}</span>
            <span>{car.price}</span> */
}
