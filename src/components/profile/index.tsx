import { useContext } from "react";
import { ProfileWrapper } from "./styles";
import { ContextApi } from "../../contexts";

const Profile = () => {
  const { setIsOpen }: any = useContext(ContextApi);
  return (
    <>
      <ProfileWrapper>
        <figure className="anunciante">
          <img
            src="https://www.psicologo.com.br/wp-content/uploads/sou-uma-pessoa-boa-ou-nao.jpg"
            alt="img_admin"
            className="anunciante-img"
          />
          <figcaption className="anunciante-info">
            <div className="anunciante-nome">
              <h3 className="heading-6">Samuel Leão</h3>
              <span className="body-2 anunciante-status">Anunciante</span>
            </div>
            <p className="anunciante-descricao body-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
              quaerat repellendus, corporis iure quibusdam commodi odit
              excepturi aspernatur quas? Iusto magnam id vitae explicabo
              reiciendis odit, dolores exercitationem error animi!
            </p>
          </figcaption>
        </figure>

        <button
          className="btn btn-outline-primary"
          onClick={() => setIsOpen(true)}
        >
          Criar anuncio
        </button>
      </ProfileWrapper>
    </>
  );
};

export default Profile;
