import { HeaderLogin } from "../../components/header";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { IoClose } from "react-icons/io5";
import {
  Article,
  Aside,
  Div,
  Figure,
  Main,
  SecondAside,
  DivDescription,
  SecondMain,
  Section,
} from "./styles";
import Comment from "../../components/comment";
import { useContext } from "react";
import WriteComment from "../../components/WriteComment";
import { ContextApi } from "../../contexts";
import { StyleModal } from "../../components/modal/style";
import { FormModal } from "../../components/form/style";
import Button from "../../components/button/style";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

function Product() {
  const { card, isOpen, setIsOpen, idCar, listUserId }: any =
    useContext(ContextApi);
    const {user} = useContext(UserContext)

  const navigate = useNavigate();

  return (
    <>
      {user?  <HeaderLogin /> : <Header/>}
      <Section>
        {idCar && (
          <Article>
            <Main>
              <Figure onClick={() => setIsOpen(true)}>
                <img src={card.images[0].url} alt="" />
              </Figure>
              <Div>
                <h3>{card.brand}</h3>
                <div className="container-infos">
                  <div className="priceAndSpan">
                    <div className="span">
                      <span>{card.year}</span>
                      <span>{card.km} KM</span>
                    </div>
                    <div className="price">
                      <p>R$ {card.price}</p>
                    </div>
                  </div>
                  <button className="btn btn-primary btn-medium">
                    Comprar
                  </button>
                </div>
              </Div>
              <DivDescription className="description">
                <h3>Descrição</h3>
                <p>{card.description}</p>
              </DivDescription>
              <Comment />
              <WriteComment />
            </Main>
            <SecondMain>
              <Aside>
                <div>
                  <h3>Fotos</h3>
                </div>
                <div className="small-images">
                  <img src={card.images[1].url} alt="" />
                  <img src={card.images[2].url} alt="" />
                  <img src={card.images[3].url} alt="" />
                  <img src={card.images[4].url} alt="" />
                  <img src={card.images[5].url} alt="" />
                  <img src={card.images[6].url} alt="" />
                </div>
              </Aside>
              <SecondAside>
                <h3>{card.user.name}</h3>
                <p>{card.user.description}</p>
                <Button
                  onClick={() => {
                    listUserId(card.user.id);
                  }}
                >
                  Ver todos anúncios
                </Button>
              </SecondAside>
            </SecondMain>
          </Article>
        )}
      </Section>
      <Footer />

      {isOpen && idCar && (
        <StyleModal
          id="wrapp"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            const target = e.target as HTMLButtonElement;
            if (target.id === "wrapp") {
              setIsOpen(false);
            }
          }}
        >
          <div className="modal-wrapper">
            <FormModal>
              <div className="modal-header">
                <span>Mercedes Benz A 2000 CGI ADVANCE SEDAN</span>
                <Button model="model-5" onClick={() => setIsOpen(false)}>
                  <IoClose />
                </Button>
              </div>
              <div className="modal-img">
                <img src={card.images[0].url} alt="" />
              </div>
            </FormModal>
          </div>
        </StyleModal>
      )}
    </>
  );
}

export default Product;
