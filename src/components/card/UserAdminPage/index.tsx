import { CardsListAdminUser, StyledCards } from "../UserAdminPage/style";
import { ContextApi } from "../../../contexts";
import { useContext } from "react";
import car from "../../../img/Car.png";
import { Flex } from "@chakra-ui/react";

interface iCardProps {
  getCars: ICard[];
}

interface IImages {
  id: string;
  url: string;
}

interface ICard {
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

const CardUserAdmin = () => {
  const { getCardId, listCards }: any = useContext(ContextApi);

  return (
    <>
      <CardsListAdminUser>
        {listCards.map((car: ICard) => {
          return (
            <>
              <StyledCards
                onClick={() => {
                  getCardId(car.id);
                }}
              >
                <div className="boxImage">
                  <img src={car.images[0].url} alt="car-image" />
                  <span className="status" id="ativo">
                    Ativo
                  </span>
                  <span className="moneySign">$</span>
                </div>

                <figcaption className="description">
                  <h3 className="heading-7">{car.model}</h3>
                  <p className="body-2">{car.description}</p>

                  <div className="boxUser">
                    <img src={car.images[0].url} alt="user-photo" />
                    <p className="body-2">Claudio</p>
                  </div>

                  <div className="boxExtraInfo">
                    <ul className="boxFilterInfo">
                      <li>{car.km}</li>
                      <li>{car.year}</li>
                    </ul>

                    <span className="price heading-7">{`R$: ${car.price}`}</span>
                  </div>
                  <Flex gap={"8px"} style={{marginTop: 16}}>
                    <button className="btn btn-outline btn-medium">
                      Editar
                    </button>
                    <button className="btn btn-outline btn-medium">
                      Ver Detalhes
                    </button>
                  </Flex>
                </figcaption>
              </StyledCards>
            </>
          );
        })}
      </CardsListAdminUser>
    </>
  );
};

export default CardUserAdmin;
