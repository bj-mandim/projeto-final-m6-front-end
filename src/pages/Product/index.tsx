import { HeaderLogin } from "../../components/header";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { IoClose } from "react-icons/io5";
import {
  Article,
  Main,
  Aside,
  Section,
  WhiteSection,
  PrimerInfo,
} from "./styles";
import { Flex } from "@chakra-ui/react";
import { Comment } from "../../components/comment";
import { useContext, useEffect, useState } from "react";
import WriteComment from "../../components/WriteComment";
import { ContextApi } from "../../contexts";
import { StyleModal } from "../../components/modal/style";
import { FormModal } from "../../components/form/style";
import { StyleAvatarUserAdminPage } from "../../components/avatar/style";
import Button from "../../components/button/style";
import { UserContext } from "../../contexts/userContext";

function Product() {
  const { card, isOpen, setIsOpen, idCar, listUserId }: any =
    useContext(ContextApi);
  const { user }: any = useContext(UserContext);
  const [imageView, setImageView] = useState(0);

  function decodeTellphone(text: string) {
    let tellDecoded = "";
    const pedidoDecoded =
      "Ol%C3%A1,%20achei%20seu%20an%C3%BAncio%20interessante!%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20carro?%20";
    for (let i = 0; i < text.length; i++) {
      if (text[i] === "-") {
        let replace = text.replace(text[i], "");
        tellDecoded += replace;
      }
    }
    let url = `https://api.whatsapp.com/send?phone=${tellDecoded}&text=${pedidoDecoded}`;
    return url;
  }

  useEffect(() => {
    if (user) {
      decodeTellphone(card.user.phone);
    }
  }, []);

  return (
    <>
      {user ? <HeaderLogin /> : <Header />}
      <Section>
        {idCar && (
          <Article>
            <Main>
              <WhiteSection
                className="principal-img"
                onClick={() => {
                  setIsOpen(true);
                  setImageView(1);
                }}
              >
                <img src={card.images[0].url} alt="" />
              </WhiteSection>
              <WhiteSection>
                <h3
                  className="heading-6 text-center"
                  style={{ marginBottom: 24 }}
                >
                  {card.brand}
                </h3>

                <Flex
                  gap={"16px"}
                  justifyContent="space-between"
                  w={"100%"}
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <Flex gap={"16px"}>
                    <PrimerInfo>{card.year}</PrimerInfo>
                    <PrimerInfo>{card.km} KM</PrimerInfo>
                  </Flex>
                  <p className="heading heading-7">R$ {card.price}</p>
                </Flex>
                {/* <button className="btn btn-primary btn-medium" style={{ marginTop: 16 }} onClick={
                  () => {

                  }
                }>
                  Comprar
                </button> */}
                {user && <a className="btn btn-primary btn-medium" style={{ marginTop: 16, width: 68, }} href={decodeTellphone(user.phone)}>Comprar</a>}
              </WhiteSection>
              <WhiteSection>
                <h3>Descrição</h3>
                <p>{card.description}</p>
              </WhiteSection>
              <Comment />
              <WriteComment />
            </Main>
            <Aside>
              <WhiteSection>
                <h3>Fotos</h3>
                <div className="small-images">
                  {card.images.map((image: any, index: number) => (
                    <img
                      src={card.images[index].url}
                      onClick={() => {
                        setIsOpen(true);
                        setImageView(index + 1);
                      }}
                      alt={`Imagem ${index + 1}`}
                    />
                  ))}
                </div>
              </WhiteSection>
              <WhiteSection className="text-center">
                <StyleAvatarUserAdminPage style={{ justifyContent: "Center" }}>
                  <div>{card.user.name[0].toUpperCase()}</div>
                </StyleAvatarUserAdminPage>
                <h3>{card.user.name}</h3>
                <p>{card.user.description}</p>
                <br />
                <a
                  className="btn btn-grey-1"
                  onClick={() => {
                    listUserId(card.user.id);
                  }}
                >
                  Ver todos anúncios
                </a>
              </WhiteSection>
            </Aside>
          </Article>
        )}
      </Section>
      <Footer />

      {isOpen && idCar && imageView && (
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
                <span>{card.model}</span>
                <Button model="model-5" onClick={() => setIsOpen(false)}>
                  <IoClose />
                </Button>
              </div>
              <div className="modal-img">
                <img src={card.images[imageView - 1].url} alt="" />
              </div>
            </FormModal>
          </div>
        </StyleModal>
      )}
    </>
  );
}

export default Product;
