import Motors_shop_footer from "../../img/Motors_shop_footer.png";
import direitos_reservados from "../../img/direitos_reservados.png";
import { Containerfooter } from "./style";

export const Footer = () => {
  return (
    <Containerfooter>
      <div>
        <figure>
          <img src={Motors_shop_footer} alt="Logo" />
        </figure>
        <figure>
          <img src={direitos_reservados} alt="Direitos reservados" />
        </figure>
        <a href="#">^</a>
      </div>
    </Containerfooter>
  );
};