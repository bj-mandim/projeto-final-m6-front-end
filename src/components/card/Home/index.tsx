import { CardsList, StyledCards } from "./style";
import { ContextApi } from "../../../contexts";
import { useContext } from "react";
import { StyleAvatar, StyleAvatarUserAdminPage } from "../../avatar/style";
import { UserContext, iUser } from "../../../contexts/userContext";

interface iCardProps {
  getCars: ICard[];
}

interface IImages {
  id: string;
  url: string;
}
interface IUser {
  id: string;
  name: string;
  email: string;
  is_announcer: boolean;
  description: string;
  phone: string;
  cpf: string;
  birth: string;
  image: {
    url: string;
  }
}

export interface ICard {
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
  user: iUser;
}

const Card = () => {
  const { getCardId, listCards }: any = useContext(ContextApi);
  console.log(listCards);

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
                  <img src={car.images[0]?.url} alt="car-image" />
                  <span className="status" id="ativo">
                    Ativo
                  </span>
                  <span className="moneySign">$</span>
                </div>

                <figcaption className="description">
                  <h3 className="heading-7">{car.model}</h3>
                  <p className="body-2">{car.description}</p>

                  <div className="boxUser">
                    <StyleAvatar>
                      {car.user.image_url ? (
                        <img src={car.user.image_url} alt="" />
                      ) : (
                        <div>{car.user.name[0].toUpperCase()}</div>
                      )}
                    </StyleAvatar>
                    {/* <img src={car.images[0].url} alt="user-photo" /> */}
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

const CardUserPage = () => {
  const { getCardId }: any = useContext(ContextApi);
  const { userPage }: any = useContext(UserContext);

  return (
    <>
      <CardsList>
        {userPage.cars.map((car: ICard) => {
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
                    <StyleAvatar>
                      {car.user.image_url ? (
                        <img src={car.user.image_url} alt="" />
                      ) : (
                        <div>{car.user.name[0].toUpperCase()}</div>
                      )}
                    </StyleAvatar>
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
