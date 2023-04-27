import { HeaderWrapper, HeaderContainer } from "./style";
import Logo from "../../img/motors_shop_logo.png";
import { useContext, useState } from "react";
import { Flex, Image, HStack, Link, IconButton } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "../button/style";
import Avatar from "../avatar";
import { ContextApi } from "../../contexts";

const user = {
  image_url:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIqt6O6bqpcON7yrS0AoagxeM8LZje-nzH2g&usqp=CAU",
  name: "Vitória Mandim",
};

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

export const HeaderLogin = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setInfosOpen, setOptionsOpen, setadressModalOpen }: any =
    useContext(ContextApi);
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
                  onClick={() => navigate("/")}
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
    </>
  );
};
