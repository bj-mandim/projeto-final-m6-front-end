import HeaderContainer from "./style";
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
    <Flex justify={"space-between"} p={"16px"}>
        <Image
          src={Logo}
          alt="Logo do header"
          maxW={"300px"}
          maxH={"30px"}
        />
        <HStack
          display={{ base: "none", md: "flex" }}
          borderLeft={"2px"}
          borderLeftColor={"gray.200"}
          spacing={"16px"}
          w={"300px"}
          justify={"space-evenly"}
        >
          <Link>Fazer Login</Link>
          <Button variant={"outline-1"}>Cadastrar</Button>
        </HStack>
        <IconButton
          aria-label="Abrir menu"
          icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ base: "flex", md: "none" }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          variant={"outline"}
        />
      </Flex>
      {isMenuOpen && (
        <Flex
          direction={"column"}
          boxShadow={"md"}
          display={{ base: "flex", md: "none" }}
          w={"100%"}
          p={"16px"}
          bg={"white"}
          pos={"absolute"}
         top={"70px"}
          zIndex={9999}
          gap={"30px"}
        >
          <Button variant={"outline-1"}>Fazer Login</Button>
          <Button variant={"outline-1"}>Cadastrar</Button>
        </Flex>
      )}
      <Outlet />

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
