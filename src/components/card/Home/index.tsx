import { CardsList, StyledCards } from "./style";
import { ContextApi } from "../../../contexts";
import { useContext } from "react";
import { StyleAvatar, StyleAvatarUserAdminPage } from "../../avatar/style";
import { UserContext } from "../../../contexts/userContext";
import { ICard } from "../../../interfaces/Car";

const Card = () => {
  const { getCardId, listCards }: any = useContext(ContextApi);
  console.log(listCards);

  return (
    <>
      <CardsList>
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
