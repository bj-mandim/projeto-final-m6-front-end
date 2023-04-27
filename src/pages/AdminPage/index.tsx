import { HeaderLogin } from "../../components/header";
import { Section, Article } from "./styles";
import Profile from "../../components/profile";
import CardUserAdmin from "../../components/card/UserAdminPage";
import { ContextApi } from "../../contexts";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { FormModal } from "../../components/form/style";
import { StyleModal } from "../../components/modal/style";
import Pagination from "../../components/pagination";
import { Footer } from "../../components/footer";
import Button from "../../components/button/style";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const {
    isOpen,
    setIsOpen,
    infosOpen,
    getFipeTable,
    model,
    brand,
    setBrand,
    setModel,
    price,
    optionsOpen,
    setInfosOpen,
    setOptionsOpen,
    adressModalOpen,
    setadressModalOpen,
  }: any = useContext(ContextApi);
  const navigate = useNavigate();

  function fipeTable(model: any, brand: any) {
    if (brand!) {
      getFipeTable(brand.value, model.value);
    }
  }

  return (
    <>
      <HeaderLogin />
      <Section>
        <Article>
          <Profile />
          <h3 className="heading-6">Anúncios</h3>
        </Article>

        <CardUserAdmin />

        <Pagination />
      </Section>
      <Footer />
      {isOpen && (
        <StyleModal>
          <div className="modal-wrapper">
            <div className="container-form">
              <FormModal>
                <div className="modal-header">
                  <h2 className="header_register">Criar Anuncio</h2>
                  <Button model="model-5" onClick={() => setIsOpen(false)}>
                    <IoClose />
                  </Button>
                </div>
                <br />
                <strong>Informações do veículo</strong>
                <div className="content_register">
                  <label htmlFor="email">Marca</label>
                  <input
                    type="name"
                    id="marca"
                    placeholder="Ex. Mercedes Benz"
                  />
                  <label htmlFor="email">Modelo</label>
                  <input
                    type="name"
                    id="modelo"
                    placeholder="Ex. A 200 CGI ADVANCE SEDAN"
                  />
                  <div className="inline-fields">
                    <div>
                      <label htmlFor="email">Ano</label>
                      <input
                        onClick={(e) => {
                          e.preventDefault();
                          const marcaValue = document.querySelector("#marca");
                          const modeloValue = document.querySelector("#modelo");
                          setBrand(marcaValue);
                          setModel(modeloValue);
                          fipeTable(model, brand);
                        }}
                        type="text"
                        id="ano"
                        placeholder="Ex. 2018"
                      />
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
                      <input
                        type="text"
                        id="quilometragem"
                        placeholder="Ex. 201"
                      />
                    </div>

                    <div>
                      <label htmlFor="email">Cor</label>
                      <input type="text" id="cor" placeholder="Ex. Rosa" />
                    </div>
                  </div>
                  <div className="inline-fields">
                    <div>
                      <label htmlFor="email">Tabela FIPE</label>
                      <input type="text" placeholder={`R$: ${price}`} />
                    </div>

                    <div>
                      <label htmlFor="email">Preço</label>
                      <input type="text" id="preco" placeholder="Ex. 100000" />
                    </div>
                  </div>
                  <label htmlFor="email">Descrição</label>
                  <input
                    type="text"
                    id="descricao"
                    placeholder="Ex. O carro se encontra em tais condições..."
                  />
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
                </div>
              </FormModal>
            </div>
          </div>
        </StyleModal>
      )}
      {infosOpen && (
        <StyleModal>
          <div className="modal-wrapper">
            <div className="container-form">
              <FormModal>
                <div className="modal-header">
                  <h2 className="header_register">Editar Perfil</h2>
                  <Button model="model-5" onClick={() => setIsOpen(false)}>
                    <IoClose />
                  </Button>
                </div>
                <br />
                <strong>Informações do usuário</strong>
                <div className="content_register">
                  <label htmlFor="email">Nome</label>
                  <input
                    type="name"
                    id="name"
                    placeholder="Ex. Vitória Simões"
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="name"
                    id="name"
                    placeholder="Ex. vitoriasomoes2023@mail.com"
                  />
                  <label htmlFor="email">CPF</label>
                  <input
                    type="name"
                    id="name"
                    placeholder="Ex. 999.999.999-00"
                  />
                  <label htmlFor="email">Celular</label>
                  <input
                    type="name"
                    id="name"
                    placeholder="Ex. (027)99999-9999"
                  />
                  <label htmlFor="email">Data de Nascimento</label>
                  <input type="name" id="name" placeholder="Ex. 09/09/09" />
                  <label htmlFor="email">Descrição</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Ex. local da descrição..."
                  />
                </div>
              </FormModal>
            </div>
          </div>
        </StyleModal>
      )}
      {optionsOpen && (
        <StyleModal>
          <div className="modal-wrapper">
            <div className="container-form">
              <FormModal>
                <div className="modal-header">
                  <h2 className="header_register">Options User</h2>
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
                <div className="content_register">
                  <label htmlFor="email">Deslogar do Perfil</label>
                  <Button
                    onClick={(e) => {
                      navigate("/");
                    }}
                  >
                    Sair
                  </Button>
                </div>
              </FormModal>
            </div>
          </div>
        </StyleModal>
      )}
      {adressModalOpen && (
        <StyleModal>
          <div className="modal-wrapper">
            <div className="container-form">
              <FormModal>
                <div className="modal-header">
                  <h2 className="header_register">Editar Endereço</h2>
                  <Button model="model-5" onClick={() => setIsOpen(false)}>
                    <IoClose />
                  </Button>
                </div>
                <br />
                <strong>Informações do endereço usuário</strong>
                <div className="content_register">
                  <label htmlFor="email">CEP</label>
                  <input type="name" id="cep" placeholder="Ex. 89888.888" />
                  <div className="inline-fields">
                    <div>
                      <label htmlFor="email">Estado</label>
                      <input
                        type="text"
                        id="estado"
                        placeholder="Ex. Espírito Santo"
                      />
                    </div>

                    <div>
                      <label htmlFor="email">Cidade</label>
                      <input
                        type="text"
                        id="cidade"
                        placeholder="Ex. Guarapari"
                      />
                    </div>
                  </div>
                  <label htmlFor="email">Rua</label>
                  <input
                    type="text"
                    id="rua"
                    placeholder="Ex. Rua de Ninguem"
                  />
                  <div className="inline-fields">
                    <div>
                      <label htmlFor="email">Número</label>
                      <input type="number" id="numero" placeholder="Ex. 218" />
                    </div>

                    <div>
                      <label htmlFor="email">Complemento</label>
                      <input
                        type="text"
                        id="complemento"
                        placeholder="Ex. Apart 12"
                      />
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
}

export default AdminPage;
