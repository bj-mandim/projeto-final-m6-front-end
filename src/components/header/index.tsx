import HeaderContainer from "./styles";
import Logo from "../../img/motors_shop_logo.png";

const Header = () => {
  return (
    <>
      <HeaderContainer id="header">
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
      </HeaderContainer>
    </>
  );
};

export default Header;
