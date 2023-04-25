import { useContext } from "react";
import { ProfileWrapper } from "./styles";
import { ContextApi } from "../../contexts";
import { StyleModal } from "../modal/style";
import { IoClose } from "react-icons/io5";
import { FormModal } from "../form/style";

const Profile = () => {
  const { isOpen, setIsOpen }: any = useContext(ContextApi);
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
      {isOpen && (
        <StyleModal>
          <div className="modal-wrapper">
            <div className="modal-header">
              <button onClick={() => setIsOpen(false)}>
                <IoClose />
              </button>
            </div>
            <div className="container-form">
              <FormModal>
                <h2 className="header_register">Criar Anuncio</h2>
                <br />
                <strong>Informações do veículo</strong>
                <div className="content_register">
                  <label htmlFor="email">Marca</label>
                  <input
                    type="name"
                    id="name"
                    placeholder="Ex. Mercedes Benz"
                  />
                  <label htmlFor="email">Modelo</label>
                  <input
                    type="name"
                    id="name"
                    placeholder="Ex. A 200 CGI ADVANCE SEDAN"
                  />
                  <div className="inline-fields">
                    <div>
                      <label htmlFor="email">Ano</label>
                      <input type="text" id="number" placeholder="Ex. 2018" />
                    </div>

                    <div>
                      <label htmlFor="email">Combustível</label>
                      <input
                        type="text"
                        id="combustivel"
                        placeholder="Ex. 100"
                      />
                    </div>
                  </div>
                  <div className="inline-fields">
                    <div>
                      <label htmlFor="email">Quilometragem</label>
                      <input type="text" id="number" placeholder="Ex. 201" />
                    </div>

                    <div>
                      <label htmlFor="email">Cor</label>
                      <input
                        type="text"
                        id="combustivel"
                        placeholder="Ex. Rosa"
                      />
                    </div>
                  </div>
                  <div className="inline-fields">
                    <div>
                      <label htmlFor="email">Tabela FIPE</label>
                      <input
                        type="text"
                        id="number"
                        placeholder="Valor ideal para venda"
                      />
                    </div>

                    <div>
                      <label htmlFor="email">Preço</label>
                      <input
                        type="text"
                        id="combustivel"
                        placeholder="Ex. 100.000,00"
                      />
                    </div>
                  </div>
                  <label htmlFor="email">Descrição</label>
                  <input
                    type="text"
                    id="combustivel"
                    placeholder="Ex. O carro se encontra em tais condições..."
                  />
                  gi
                </div>
              </FormModal>
            </div>
          </div>
        </StyleModal>
      )}
    </>
  );
};

export default Profile;
