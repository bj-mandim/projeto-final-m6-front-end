import { HeaderLogin } from "../../components/header";
import { Section, Article } from "./styles";
import { Profile } from "../../components/profile";
import CardUserAdmin from "../../components/card/UserAdminPage";
import { ContextApi } from "../../contexts";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { FormModal } from "../../components/form/style";
import { StyleModal } from "../../components/modal/style";
import { Footer } from "../../components/footer";
import Button from "../../components/button/style";
import { UserContext } from "../../contexts/userContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  schemaCreateAnnouncement,
  schemaPatchAnnouncement,
} from "../../validators";
import {
  iFormCreateAnnouncement,
  iFormUpdateAnnouncement,
} from "../../interfaces/Car";
import { CarsContext } from "../../contexts/carsContext";

function AdminPage() {
  const {
    isOpen,
    setIsOpen,
    getFipeTable,
    model,
    brand,
    setBrand,
    setModel,
    price,
    carModalOpen,
    setCarModalOpen,
    idCar,
  }: any = useContext(ContextApi);
  const { user } = useContext(UserContext);
  const { deleteAnnouncement } = useContext(CarsContext);

  const arrayID: any = [];
  for (let i = 0; i < 7; i++) {
    arrayID.push({ id: i });
  }

  const formCreateAnnounce = useForm<iFormCreateAnnouncement>({
    resolver: yupResolver(schemaCreateAnnouncement),
  });

  const formEditAnnounce = useForm<iFormUpdateAnnouncement>({
    resolver: yupResolver(schemaPatchAnnouncement),
  });

  const { createAnnouncement, updateAnnouncement }: any =
    useContext(CarsContext);

  function fipeTable(model: any, brand: any) {
    if (brand!) {
      getFipeTable(brand.value, model.value);
    }
  }

  return (
    user && (
      <>
        <HeaderLogin />
        <Section>
          <Article>
            <Profile />
            <h3 className="heading-6">Anúncios</h3>
          </Article>

          <CardUserAdmin />
        </Section>
        <Footer />
        {isOpen && (
          <StyleModal>
            <div className="modal-wrapper">
              <div className="container-form">
                <FormModal
                  onSubmit={formCreateAnnounce.handleSubmit((info) => {
                    createAnnouncement({
                      ...info,
                      fipe_table: `${price}.00`,
                      is_active: true,
                      is_promotion: parseFloat(info.price) <= price * 0.95,
                    });
                  })}
                >
                  <div className="modal-header">
                    <h2 className="header_register">Criar Anuncio</h2>
                    <Button
                      type="button"
                      model="model-5"
                      onClick={() => setIsOpen(false)}
                    >
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
                      {...formCreateAnnounce.register("brand")}
                    />
                    <span>
                      {formCreateAnnounce.formState.errors.brand?.message}
                    </span>

                    <label htmlFor="email">Modelo</label>
                    <input
                      type="name"
                      id="modelo"
                      placeholder="Ex. A 200 CGI ADVANCE SEDAN"
                      {...formCreateAnnounce.register("model")}
                    />
                    <span>
                      {formCreateAnnounce.formState.errors.model?.message}
                    </span>

                    <div className="content_register">
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
                        {...formCreateAnnounce.register("year")}
                      />

                      <span>
                        {formCreateAnnounce.formState.errors.year?.message}
                      </span>
                    </div>

                    <div>
                      <label htmlFor="email">Combustível</label>
                      <input
                        type="text"
                        id="combustivel"
                        placeholder="Ex. Elétrico"
                        {...formCreateAnnounce.register("fuel")}
                      />

                      <span>
                        {formCreateAnnounce.formState.errors.fuel?.message}
                      </span>
                    </div>
                  </div>
                  <div className="inline-fields">
                    <div>
                      <label htmlFor="email">Quilometragem</label>
                      <input
                        type="text"
                        id="quilometragem"
                        placeholder="Ex. 201"
                        {...formCreateAnnounce.register("km")}
                      />

                      <span>
                        {formCreateAnnounce.formState.errors.km?.message}
                      </span>
                    </div>

                    <div>
                      <label htmlFor="email">Cor</label>
                      <input
                        type="text"
                        id="cor"
                        placeholder="Ex. Rosa"
                        {...formCreateAnnounce.register("color")}
                      />

                      <span>
                        {formCreateAnnounce.formState.errors.color?.message}
                      </span>
                    </div>
                  </div>
                  <div className="inline-fields">
                    <div>
                      <label htmlFor="email">Tabela FIPE</label>
                      <input
                        type="text"
                        placeholder={`R$: ${price}`}
                        {...formCreateAnnounce.register("fipe_table")}
                      />
                    </div>

                    <div>
                      <label htmlFor="email">Preço</label>
                      <input
                        type="text"
                        id="preco"
                        placeholder="Ex. 100000"
                        {...formCreateAnnounce.register("price")}
                      />

                      <span>
                        {formCreateAnnounce.formState.errors.price?.message}
                      </span>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email">Descrição</label>
                    <input
                      type="text"
                      id="descricao"
                      placeholder="Ex. O carro se encontra em tais condições..."
                      {...formCreateAnnounce.register("description")}
                    />

                    <span>
                      {formCreateAnnounce.formState.errors.description?.message}
                    </span>

                    {arrayID.map((field: any, index: any) => {
                      return (
                        <>
                          <label htmlFor="email">Cole a URL da Imagem</label>
                          <input
                            key={field.id}
                            type="text"
                            id="img-capa2"
                            placeholder="Ex. https://imagem.com"
                            {...formCreateAnnounce.register(
                              `images.${index}.url`
                            )}
                          />
                          <span>
                            {
                              formCreateAnnounce.formState.errors.images
                                ?.message
                            }
                          </span>
                        </>
                      );
                    })}
                  </div>
                  <Button model="model-form">Criar Anúncio</Button>
                </FormModal>
              </div>
            </div>
          </StyleModal>
        )}

        {carModalOpen && (
          <StyleModal>
            <div className="modal-wrapper">
              <div className="container-form">
                <FormModal
                  onSubmit={formEditAnnounce.handleSubmit((info) => {
                    updateAnnouncement(info, idCar);
                    setCarModalOpen(false);
                  })}
                >
                  <div className="modal-header">
                    <h2 className="header_register">Editar Anuncio</h2>
                    <Button
                      type="button"
                      model="model-5"
                      onClick={() => setCarModalOpen(false)}
                    >
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
                      {...formEditAnnounce.register("brand")}
                    />
                    <span>
                      {formEditAnnounce.formState.errors.brand?.message}
                    </span>

                    <label htmlFor="email">Modelo</label>
                    <input
                      type="name"
                      id="modelo"
                      placeholder="Ex. A 200 CGI ADVANCE SEDAN"
                      {...formEditAnnounce.register("model")}
                    />
                    <span>
                      {formEditAnnounce.formState.errors.model?.message}
                    </span>

                    <div className="content_register">
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
                        placeholder="Ex. 2018"
                        {...formEditAnnounce.register("year")}
                      />
                    </div>
                    <span>
                      {formEditAnnounce.formState.errors.year?.message}
                    </span>

                    <div>
                      <label htmlFor="email">Combustível</label>
                      <input
                        type="text"
                        id="combustivel"
                        placeholder="Ex. Elétrico"
                        {...formEditAnnounce.register("fuel")}
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
                        {...formEditAnnounce.register("km")}
                      />
                    </div>

                    <div>
                      <label htmlFor="email">Cor</label>
                      <input
                        type="text"
                        id="cor"
                        placeholder="Ex. Rosa"
                        {...formEditAnnounce.register("color")}
                      />
                    </div>
                  </div>
                  <div className="inline-fields">
                    <div>
                      <label htmlFor="email">Tabela FIPE</label>
                      <input
                        type="text"
                        placeholder={`R$: ${price}`}
                        {...formEditAnnounce.register("fipe_table")}
                      />
                    </div>

                    <div>
                      <label htmlFor="email">Preço</label>
                      <input
                        type="text"
                        id="preco"
                        placeholder="Ex. 100000"
                        {...formEditAnnounce.register("price")}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email">Descrição</label>
                    <input
                      type="text"
                      id="descricao"
                      placeholder="Ex. O carro se encontra em tais condições..."
                      {...formEditAnnounce.register("description")}
                    />

                    {arrayID.map((field: any, index: any) => {
                      return (
                        <>
                          <label htmlFor="email">Cole a URL da Imagem</label>
                          <input
                            key={field.id}
                            type="text"
                            id="img-capa2"
                            placeholder="Ex. https://imagem.com"
                            {...formEditAnnounce.register(
                              `images.${index}.url`
                            )}
                          />
                        </>
                      );
                    })}
                  </div>
                  <Button
                    type="button"
                    model="model-form"
                    onClick={() => {
                      deleteAnnouncement(idCar);
                      setCarModalOpen(false);
                    }}
                  >
                    Excluir Anúncio
                  </Button>
                  <Button model="model-form">Salvar Alterações</Button>
                </FormModal>
              </div>
            </div>
          </StyleModal>
        )}
      </>
    )
  );
}

export default AdminPage;
