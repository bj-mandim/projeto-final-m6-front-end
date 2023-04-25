import Header from "../../components/header";
import { Section, Article } from "./styles";
import Profile from "../../components/profile";
import CardUserAdmin from "../../components/card/UserAdminPage";
import { ContextApi } from "../../contexts";
import { useContext } from "react";
import { Modal } from "../Product/styles";
import { IoClose } from "react-icons/io5";
import { Form, FormModal } from "../../components/form/style";
import { StyleModal } from "../../components/modal/style";
import Pagination from "../../components/pagination";
import { Footer } from "../../components/footer";
import Button from "../../components/button/style";

function AdminPage() {
  const { isOpen, setIsOpen }: any = useContext(ContextApi);
  return (
    <>
      <Header />
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
