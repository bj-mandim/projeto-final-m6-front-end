import HeaderContainer from "./styles";
import Logo from "../../img/motors_shop_logo.png"

const Header  = () => {
    return (
        <>
            <HeaderContainer>
                <div className="logo">
                    <img src={Logo} alt="Logo MotorsShop"/>
                </div>

                <section className="content-menu">
                    <ul className="categories">
                        <li><a href="#">Carros</a></li>
                        <li><a href="#">Motos</a></li>
                        <li><a href="#">Leilão</a></li>
                    </ul>

                    <nav>
                        <div className="btnGroup">
                            <a className="btn btn-link">Fazer Login</a>
                            <a className="btn btn-outline">Cadastrar</a>
                        </div>
                    </nav>
                </section>
            </HeaderContainer>
        </>
    );
}

export default Header;