import Header from "../../components/header";
// import "./style.css";
import { Footer } from "../../components/footer";
import { IoClose } from "react-icons/io5";
import {
  Article,
  Aside,
  Div,
  Figure,
  Main,
  Modal,
  SecondAside,
  DivDescription,
  SecondMain,
  Section,
} from "./styles";
import Comment from "../../components/comment";
import { useContext } from "react";
import WriteComment from "../../components/WriteComment";
import { ContextApi } from "../../contexts";

function Product() {
  const { card, isOpen, setIsOpen }: any = useContext(ContextApi);

  return (
    <>
      <Header></Header>
      <Section>
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
                <button className="btn btn-primary btn-medium">Comprar</button>
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
              <h3>Samuel Leão</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <button>Ver todos anúncios</button>
            </SecondAside>
          </SecondMain>
        </Article>
      </Section>
      {isOpen && (
        <Modal
          id="wrapp"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            const target = e.target as HTMLButtonElement;
            if (target.id === "wrapp") {
              setIsOpen(false);
            }
          }}
        >
          <div className="modal-wrapper">
            <div className="modal-header">
              <h3>Mercedes Benz A 2000 CGI ADVANCE SEDAN</h3>
              <button onClick={() => setIsOpen(false)}>
                <IoClose />
              </button>
            </div>
            <div className="modal-img">
              <img src={card.images[0].url} alt="" />
            </div>
          </div>
        </Modal>
      )}
      <Footer />
    </>
  );
}

export default Product;
