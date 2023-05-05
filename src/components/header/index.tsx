import { HeaderWrapper, HeaderContainer } from "./style";
import Logo from "../../img/motors_shop_logo.png";
import { useContext, useState } from "react";
import { Flex, Image, HStack, Link, IconButton } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "../button/style";
import Avatar from "../avatar";
import { ContextApi } from "../../contexts";
import { UserContext } from "../../contexts/userContext";
import { StyleModal } from "../modal/style";
import { FormModal } from "../form/style";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <HeaderWrapper id="header">
        <HeaderContainer>
          <Image
            src={Logo}
            alt="Logo do header"
            maxW={"300px"}
            maxH={"30px"}
            id="logo"
            onClick={() => navigate("/")}
          />
          <nav id="nav">
            <HStack
              display={{ base: "none", md: "flex" }}
              borderLeft={"2px"}
              borderLeftColor={"gray.200"}
              spacing={"16px"}
              w={"300px"}
              justify={"space-evenly"}
              id="menu-desktop"
            >
              <Button
                onClick={() => navigate("/login")}
                model="model-5"
                className="btn btn-link-primary"
              >
                Fazer Login
              </Button>
              <Button
                model="model-7"
                className="btn btn-outline"
                onClick={() => navigate("/register")}
              >
                Cadastrar
              </Button>
            </HStack>

            <IconButton
              aria-label="Abrir menu"
              icon={
                isMenuOpen ? (
                  <CloseIcon />
                ) : (
                  <HamburgerIcon className="hamburger-icon" />
                )
              }
              display={{ base: "block", md: "none" }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              id="button-mobile"
              className="btn"
            />
          </nav>
        </HeaderContainer>
        {isMenuOpen && (
          <Flex
            direction={"column"}
            display={{ base: "block", md: "none" }}
            w={"100%"}
            position={"absolute"}
            bg={"white"}
            zIndex={999}
            gap={"30px"}
            id="menu-mobile"
          >
            <ul id="categories" className="body-1-600">
              <li>
                <Link>Modelos</Link>
              </li>
              <li>
                <Link>Motos</Link>
              </li>
              <li>
                <Link>Leilão</Link>
              </li>
            </ul>
            <nav id="nav-mobile">
              <Button
                onClick={() => navigate("/login")}
                model="option-modal"
                className="body-1-600"
              >
                Fazer Login
              </Button>
              <Link
                href="http://localhost:3000/register"
                className="btn btn-outline"
              >
                Cadastrar
              </Link>
            </nav>
          </Flex>
        )}
        <Outlet />
      </HeaderWrapper>
    </>
  );
};

/* const user = {
  name: "Vitória Simões",
  image_url:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIqt6O6bqpcON7yrS0AoagxeM8LZje-nzH2g&usqp=CAU",
}; 
*/

export const HeaderLogin = () => {
  const { user }: any = useContext(UserContext);
  const {
    setInfosOpen,
    setOptionsOpen,
    setadressModalOpen,
    setIsOpen,
    optionsOpen,
    infosOpen,
    adressModalOpen,
  }: any = useContext(ContextApi);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <HeaderWrapper id="header">
        <HeaderContainer>
          <Image
            src={Logo}
            alt="Logo do header"
            maxW={"300px"}
            maxH={"30px"}
            id="logo"
            onClick={() => navigate("/")}
          />
          <nav id="nav">
            <HStack
              display={{ base: "none", md: "flex" }}
              borderLeft={"2px"}
              borderLeftColor={"gray.200"}
              spacing={"16px"}
              w={"300px"}
              justify={"space-evenly"}
              id="menu-desktop"
            >
              <Avatar user={user} setOptionsOpen={setOptionsOpen} />
            </HStack>

            <IconButton
              aria-label="Abrir menu"
              icon={
                isMenuOpen ? (
                  <CloseIcon />
                ) : (
                  <HamburgerIcon className="hamburger-icon" />
                )
              }
              display={{ base: "block", md: "none" }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              id="button-mobile"
              className="btn"
            />
          </nav>
        </HeaderContainer>
        {isMenuOpen && (
          <Flex
            direction={"column"}
            display={{ base: "block", md: "none" }}
            w={"100%"}
            position={"absolute"}
            bg={"white"}
            zIndex={999}
            gap={"30px"}
            id="menu-mobile"
          >
            <ul id="categories" className="body-1-600">
              <li>
                <Button
                  onClick={() => setInfosOpen(true)}
                  model="option-modal"
                  className="body-1-600"
                >
                  Editar Perfil
                </Button>
              </li>
              <li>
                <Button
                  onClick={() => setadressModalOpen(true)}
                  model="option-modal"
                  className="body-1-600"
                >
                  Editar Endereço
                </Button>
              </li>
              <li>
                <Button
                  onClick={() => {
                    localStorage.clear();
                    navigate("/");
                  }}
                  model="option-modal"
                  className="body-1-600"
                >
                  Sair
                </Button>
              </li>
            </ul>
            <nav id="nav-mobile">
              <Button
                onClick={() => navigate("/login")}
                model="option-modal"
                className="body-1-600"
              >
                Fazer Login
              </Button>
              <Link
                href="http://localhost:3000/register"
                className="btn btn-outline"
              >
                Cadastrar
              </Link>
            </nav>
          </Flex>
        )}
        <Outlet />
      </HeaderWrapper>
      {infosOpen && (
        <StyleModal>
          <div className="modal-wrapper">
            <div className="container-form">
              <FormModal>
                <div className="modal-header">
                  <h2 className="header_register">Editar Perfil</h2>
                  <Button
                    model="model-5"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    <IoClose />
                  </Button>
                </div>
                <br />
                <strong>Informações do usuário</strong>
                <div className="content_register">
                  <label htmlFor="email">Nome</label>
                  <input
                    type="name"
                    id="name"
                    placeholder="Ex. Vitória Simões"
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="name"
                    id="name"
                    placeholder="Ex. vitoriasomoes2023@mail.com"
                  />
                  <label htmlFor="email">CPF</label>
                  <input
                    type="name"
                    id="name"
                    placeholder="Ex. 999.999.999-00"
                  />
                  <label htmlFor="email">Celular</label>
                  <input
                    type="name"
                    id="name"
                    placeholder="Ex. (027)99999-9999"
                  />
                  <label htmlFor="email">Data de Nascimento</label>
                  <input type="name" id="name" placeholder="Ex. 09/09/09" />
                  <label htmlFor="email">Descrição</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Ex. local da descrição..."
                  />
                </div>
              </FormModal>
            </div>
          </div>
        </StyleModal>
      )}
      {optionsOpen &&
        (user.is_announcer ? (
          <StyleModal>
            <div className="modal-wrapper">
              <div className="container-form">
                <FormModal>
                  <div className="modal-header">
                    <h2 className="header_register">Opções do User</h2>
                    <Button model="model-5" onClick={() => setIsOpen(false)}>
                      <IoClose />
                    </Button>
                  </div>
                  <br />
                  <strong>Selecione a opção desejada</strong>
                  <div className="inline-fields">
                    <div>
                      <label htmlFor="email">Editar Dados</label>
                      <Button
                        onClick={(e) => {
                          setOptionsOpen(false);
                          setInfosOpen(true);
                        }}
                      >
                        Dados
                      </Button>
                    </div>

                    <div>
                      <label htmlFor="email">Editar Endereço</label>
                      <Button
                        onClick={(e) => {
                          setOptionsOpen(false);
                          setadressModalOpen(true);
                        }}
                      >
                        Endereço
                      </Button>
                    </div>
                  </div>
                  <div className="inline-fields">
                    <div>
                      <label htmlFor="email">Deslogar do Perfil</label>
                      <Button
                        onClick={(e) => {
                          localStorage.clear();
                          navigate("/");
                          setInfosOpen(false);
                        }}
                      >
                        Sair
                      </Button>
                    </div>
                    <div>
                      <label htmlFor="email">Área de Anunciantes</label>
                      <Button
                        onClick={(e) => {
                          setOptionsOpen(false);
                          setInfosOpen(false);
                          navigate("/admin-page");
                        }}
                      >
                        Apenas Anunciantes
                      </Button>
                    </div>
                  </div>
                </FormModal>
              </div>
            </div>
          </StyleModal>
        ) : (
          <StyleModal>
            <div className="modal-wrapper">
              <div className="container-form">
                <FormModal>
                  <div className="modal-header">
                    <h2 className="header_register">Opções do User</h2>
                    <Button model="model-5" onClick={() => setIsOpen(false)}>
                      <IoClose />
                    </Button>
                  </div>
                  <br />
                  <strong>Selecione a opção desejada</strong>
                  <div className="inline-fields">
                    <div>
                      <label htmlFor="email">Editar Dados</label>
                      <Button
                        onClick={(e) => {
                          setOptionsOpen(false);
                          setInfosOpen(true);
                        }}
                      >
                        Dados
                      </Button>
                    </div>

                    <div>
                      <label htmlFor="email">Editar Endereço</label>
                      <Button
                        onClick={(e) => {
                          setOptionsOpen(false);
                          setadressModalOpen(true);
                        }}
                      >
                        Endereço
                      </Button>
                    </div>
                  </div>
                  <div className="inline-fields">
                    <div>
                      <label htmlFor="email">Deslogar do Perfil</label>
                      <Button
                        onClick={(e) => {
                          localStorage.clear();
                          navigate("/");
                          setInfosOpen(false);
                        }}
                      >
                        Sair
                      </Button>
                    </div>
                  </div>
                </FormModal>
              </div>
            </div>
          </StyleModal>
        ))}
      {adressModalOpen && (
        <StyleModal>
          <div className="modal-wrapper">
            <div className="container-form">
              <FormModal>
                <div className="modal-header">
                  <h2 className="header_register">Editar Endereço</h2>
                  <Button model="model-5" onClick={() => setIsOpen(false)}>
                    <IoClose />
                  </Button>
                </div>
                <br />
                <strong>Informações do endereço usuário</strong>
                <div className="content_register">
                  <label htmlFor="email">CEP</label>
                  <input type="name" id="cep" placeholder="Ex. 89888.888" />
                  <div className="inline-fields">
                    <div>
                      <label htmlFor="email">Estado</label>
                      <input
                        type="text"
                        id="estado"
                        placeholder="Ex. Espírito Santo"
                      />
                    </div>

                    <div>
                      <label htmlFor="email">Cidade</label>
                      <input
                        type="text"
                        id="cidade"
                        placeholder="Ex. Guarapari"
                      />
                    </div>
                  </div>
                  <label htmlFor="email">Rua</label>
                  <input
                    type="text"
                    id="rua"
                    placeholder="Ex. Rua de Ninguem"
                  />
                  <div className="inline-fields">
                    <div>
                      <label htmlFor="email">Número</label>
                      <input type="number" id="numero" placeholder="Ex. 218" />
                    </div>

                    <div>
                      <label htmlFor="email">Complemento</label>
                      <input
                        type="text"
                        id="complemento"
                        placeholder="Ex. Apart 12"
                      />
                    </div>
                  </div>
                </div>
              </FormModal>
            </div>
          </div>
        </StyleModal>
      )}
    </>
  );
};
