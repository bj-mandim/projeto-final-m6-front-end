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
import { useForm } from "react-hook-form";
import { iFormSignup } from "../../interfaces/User";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaPatchUser } from "../../validators";

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
    carModalOpen,
  }: any = useContext(ContextApi);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { patchUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iFormSignup>({ resolver: yupResolver(schemaPatchUser) });

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
              <FormModal
                onSubmit={handleSubmit((info) => {
                  patchUser(info);
                  reset();
                  setInfosOpen(false);
                })}
              >
                <div className="modal-header">
                  <h2 className="header_register">Editar Perfil!!!</h2>
                  <Button
                    model="model-5"
                    type="button"
                    onClick={() => {
                      setInfosOpen(false);
                    }}
                  >
                    <IoClose />
                  </Button>
                </div>
                <br />
                <strong>Informações do usuário!</strong>
                <div className="content_register">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    placeholder="Ex. Vitória Simões"
                    {...register("name")}
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Ex. vitoriasomoes2023@mail.com"
                    {...register("email")}
                  />
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="text"
                    placeholder="Ex. 999.999.999-00"
                    {...register("cpf")}
                  />
                  <label htmlFor="phone">Celular</label>
                  <input
                    type="text"
                    placeholder="Ex. (027)99999-9999"
                    {...register("phone")}
                  />
                  <label htmlFor="birth">Data de Nascimento</label>
                  <input
                    type="text"
                    placeholder="Ex. 09/09/09"
                    {...register("birth")}
                  />
                  <label htmlFor="description">Descrição</label>
                  <input
                    type="text"
                    placeholder="Ex. local da descrição..."
                    {...register("description")}
                  />
                </div>
                <Button>Alterar</Button>
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
              <FormModal
                onSubmit={handleSubmit((info) => {
                  patchUser(info);
                  reset();
                  setadressModalOpen(false);
                })}
              >
                <div className="modal-header">
                  <h2 className="header_register">Editar Endereço</h2>
                  <Button
                    model="model-5"
                    type="button"
                    onClick={() => setadressModalOpen(false)}
                  >
                    <IoClose />
                  </Button>
                </div>
                <br />
                <strong>Informações do endereço usuário!!!</strong>
                <div className="content_register">
                  <label htmlFor="address.cep">CEP</label>
                  <input
                    type="text"
                    placeholder="Ex. 89888.888"
                    {...register("address.cep")}
                  />
                  <div className="inline-fields">
                    <div>
                      <label htmlFor="address.state">Estado</label>
                      <input
                        type="text"
                        placeholder="Ex. Espírito Santo"
                        {...register("address.state")}
                      />
                    </div>

                    <div>
                      <label htmlFor="address.city">Cidade</label>
                      <input
                        type="text"
                        placeholder="Ex. Guarapari"
                        {...register("address.city")}
                      />
                    </div>
                  </div>
                  <label htmlFor="address.street">Rua</label>
                  <input
                    type="text"
                    placeholder="Ex. Rua de Ninguem"
                    {...register("address.street")}
                  />
                  <div className="inline-fields">
                    <div>
                      <label htmlFor="address.number">Número</label>
                      <input
                        type="number"
                        placeholder="Ex. 218"
                        {...register("address.number")}
                      />
                    </div>

                    <div>
                      <label htmlFor="address.complement">Complemento</label>
                      <input
                        type="text"
                        placeholder="Ex. Apart 12"
                        {...register("address.complement")}
                      />
                    </div>
                  </div>
                </div>
                <Button>Editar</Button>
              </FormModal>
            </div>
          </div>
        </StyleModal>
      )}

      {carModalOpen && (
        <StyleModal>
          <div className="modal-wrapper">
            <div className="container-form">
              <FormModal>
                <div className="modal-header">
                  <h2 className="header_register">Editar Anúncio</h2>
                  <Button model="model-5" onClick={() => setIsOpen(false)}>
                    <IoClose />
                  </Button>
                </div>
                <br />
                <strong>Informações do veículo</strong>
                <div className="content_register">
                  <label htmlFor="email">Marca</label>
                  <input type="name" id="marca" placeholder="Mercedes Benz" />
                  <div className="inline-fields">
                    <div>
                      <label htmlFor="email">Modelo</label>
                      <input
                        type="text"
                        id="A 200 CGI ADVANCE SEDAN"
                        placeholder="Ex. Espírito Santo"
                      />
                    </div>

                    <div>
                      <label htmlFor="email">Ano</label>
                      <input type="text" id="cidade" placeholder="2018" />
                    </div>
                  </div>
                  <label htmlFor="email">Combustível</label>
                  <input
                    type="text"
                    id="combustível"
                    placeholder="Gasolina / Etanol"
                  />
                  <div className="inline-fields">
                    <div>
                      <label htmlFor="email">Quilometragem</label>
                      <input
                        type="number"
                        id="quilometragem"
                        placeholder="30.000"
                      />
                    </div>

                    <div>
                      <label htmlFor="email">Cor</label>
                      <input type="text" id="cor" placeholder="Branco" />
                    </div>

                    <div>
                      <label htmlFor="email">Preço tabela FIPE</label>
                      <input
                        type="text"
                        id="tabela fipe"
                        placeholder="R$ 48.000,00"
                      />
                    </div>

                    <div>
                      <label htmlFor="email">Preço</label>
                      <input
                        type="text"
                        id="preço"
                        placeholder="R$ 50.000,00"
                      />
                    </div>
                    <label htmlFor="email">Imagem da capa</label>
                    <input
                      type="text"
                      id="img-capa"
                      placeholder="Ex. https://imagem.com"
                    />
                    <label htmlFor="email">Primeira Imagem da galeria</label>
                    <input
                      type="text"
                      id="img-capa2"
                      placeholder="Ex. https://imagem.com"
                    />
                    <label htmlFor="email">Segunda Imagem da galeria</label>
                    <input
                      type="text"
                      id="img-capa3"
                      placeholder="Ex. https://imagem.com"
                    />

                    <div>
                      <button>Exluir Anúncio</button>
                      <button>Salvar Alterações</button>
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
