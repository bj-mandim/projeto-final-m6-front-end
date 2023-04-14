import { useNavigate } from "react-router-dom";
import { StyledCards } from "../../../components/card/style";
import { ContextApi } from "../../../contexts";
import { useContext } from "react";

interface iCardProps {
  getCars: car[];
}

interface IImages {
  id: string;
  url: string;
}

interface car {
  brand: string;
  color: string;
  description: string;
  fipe_table: number;
  fuel: string;
  id: string;
  images: IImages[];
  is_active: boolean;
  km: number;
  model: string;
  price: string;
  year: number;
}

const Card = () => {
  const { getCardId, listCards }: any = useContext(ContextApi);

  return (
    <>
      {listCards.map((car: car) => {
        return (
          <>
            <StyledCards
              onClick={() => {
                getCardId(car.id);
              }}
            >
              <div className="boxImage">
                <img src={car.images[0].url} alt="car-image" />
                <span className="statusCar">Ativo</span>
              </div>
              <div className="descriptionCar">
                <h1>{car.model}</h1>
                <p>{car.description}</p>
                <div className="boxUser">
                  <img src={car.images[0].url} alt="user-photo" />
                  <h2>Claudio</h2>
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
