import { HeaderWrapper, HeaderContainer } from "./style";
import Logo from "../../img/motors_shop_logo.png";
import { useState } from "react";
import {
  Flex,
  Image,
  HStack,
  Link,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Outlet } from "react-router-dom";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <Link className="btn btn-link-primary">Fazer Login</Link>
              <Button variant={"outline-1"} className="btn btn-outline">Cadastrar</Button>
            </HStack>

            <IconButton
              aria-label="Abrir menu"
              icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon className="hamburger-icon" />}
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
              <li><Link>Carros</Link></li>
              <li><Link>Motos</Link></li>
              <li><Link>Leilão</Link></li>
            </ul>
            <nav id="nav-mobile">
              <Link className="body-1-600">Fazer Login</Link>
              <Link className="btn btn-outline">Cadastrar</Link>
            </nav>
          </Flex>
        )}
        <Outlet />
    </HeaderWrapper>

      {/* <HeaderContainer id="header">
        <img id="logo" src={Logo} alt="Logo MotorsShop" />

        <nav id="nav">
          <ul id="menu-mobile">
            <li>
              <a href="/">Carros</a>
            </li>
            <li>
              <a href="/">Motos</a>
            </li>
            <li>
              <a href="/">Leilão</a>
            </li>
          </ul>
          <div id="button-mobile">
            <button>1</button>
          </div>
          <ul id="menu-desktop">
            <li>
              <a className="btn btn-link">Fazer Login</a>
            </li>
            <li>
              <a className="btn btn-outline">Cadastrar</a>
            </li>
          </ul>
        </nav>
      </HeaderContainer> */}
    </>
  );
};

export default Header;
