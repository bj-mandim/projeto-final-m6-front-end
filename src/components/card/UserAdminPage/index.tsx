import { CardsListAdminUser, StyledCards } from "../UserAdminPage/style";
import { ContextApi } from "../../../contexts";
import { useContext } from "react";
import { Flex } from "@chakra-ui/react";
import { UserContext } from "../../../contexts/userContext";
import { StyleAvatar } from "../../avatar/style";
import { ICard } from "../../../interfaces/Car";
import Button from "../../button/style";
import { useNavigate } from "react-router-dom";

const CardUserAdmin = () => {
  const { getCardId, setCarModalOpen }: any = useContext(ContextApi);
  const { user }: any = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <CardsListAdminUser>
        {user.cars.map((car: ICard) => {
          return (
            <>
              <StyledCards
                onClick={() => {
                  getCardId(car.id);
                }}
              >
                <div className="boxImage">
                  <img src={car.images[0].url} alt="carImage" />
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
                      {user.image_url ? (
                        <img src={user.image_url} alt="" />
                      ) : (
                        <div>{user.name[0].toUpperCase()}</div>
                      )}
                    </StyleAvatar>
                    <p className="body-2">{user.name}</p>
                  </div>

                  <div className="boxExtraInfo">
                    <ul className="boxFilterInfo">
                      <li>{`${car.km} KM`}</li>
                      <li>{car.year}</li>
                    </ul>

                    <span className="price heading-7">{`R$: ${car.price}`}</span>
                  </div>
                  <Flex gap={"8px"} style={{ marginTop: 16 }}>
                    <Button
                      onClick={() => {
                        navigate("/admin-page");
                        setCarModalOpen(true);
                      }}
                    >
                      Editar
                    </Button>
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
