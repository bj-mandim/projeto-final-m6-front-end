import { ChevronUpIcon } from "@chakra-ui/icons";
import Motors_shop_footer from "../../img/Motors_shop_footer.png";
import { Containerfooter } from "./style";

export const Footer = () => {
  return (
    <Containerfooter>
      <div className="footer-wrapper">
        <figure>
          <img src={Motors_shop_footer} alt="Logo" />
        </figure>
        <p className="body-2-400 white">© 2022 - Todos os direitos reservados.</p>
        <a href="#" className="backToTop"><ChevronUpIcon/></a>
      </div>
    </Containerfooter>
  );
};