import { CardsList, StyledCards } from "./style";
import { ContextApi } from "../../../contexts";
import { useContext } from "react";
import { ICard } from "../../../interfaces/Car/car.interface";

const Card = ({ lista }: any) => {
  const { getCardId }: any = useContext(ContextApi);
  console.log(lista, "LISTA FILTRO");

  return (
    <>
      <CardsList>
        {lista.map((car: ICard) => {
          return (
            <>
              <StyledCards
                onClick={() => {
                  getCardId(car.id);
                }}
              >
                <div className="boxImage">
                  <img src={car.images[0]?.url} alt="carImage" />
                  <span className="status" id="ativo">
                    Ativo
                  </span>
                  <span className="moneySign">$</span>
                </div>

                <figcaption className="description">
                  <h3 className="heading-7">{car.model}</h3>
                  <p className="body-2">{car.description}</p>

                  <div className="boxUser">
                    <img src={car.user.image?.url} alt="userPhoto" />
                    <p className="body-2">{car.user.name}</p>
                  </div>

                  <div className="boxExtraInfo">
                    <ul className="boxFilterInfo">
                      <li>{`${car.km} KM`}</li>
                      <li>{car.year}</li>
                    </ul>

                    <span className="price heading-7">{`R$: ${car.price}`}</span>
                  </div>
                </figcaption>
              </StyledCards>
            </>
          );
        })}
      </CardsList>
    </>
  );
};

export default Card;
