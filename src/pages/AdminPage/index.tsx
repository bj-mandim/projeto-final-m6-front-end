import { HeaderLogin } from "../../components/header";
import { Section, Article } from "./styles";
import { Profile } from "../../components/profile";
import CardUserAdmin from "../../components/card/UserAdminPage";
import { ContextApi } from "../../contexts";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { FormModal } from "../../components/form/style";
import { StyleModal } from "../../components/modal/style";
import Pagination from "../../components/pagination";
import { Footer } from "../../components/footer";
import Button from "../../components/button/style";
import { UserContext } from "../../contexts/userContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCreateAnnouncement } from "../../validators";
import { iFormCreateAnnouncement } from "../../interfaces/Car";
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
  }: any = useContext(ContextApi);
  const { user } = useContext(UserContext);
  const arrayID: any = [];
  for (let i = 0; i <= 7; i++) {
    arrayID.push({ id: i });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormCreateAnnouncement>({
    resolver: yupResolver(schemaCreateAnnouncement),
  });

  const { createAnnouncement }: any = useContext(CarsContext);

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
          <Pagination />
        </Section>
        <Footer />
        {isOpen && (
          <StyleModal>
            <div className="modal-wrapper">
              <div className="container-form">
                <FormModal
                  onSubmit={handleSubmit((info) => {
                    createAnnouncement({
                      ...info,
                      fipe_table: `${price}.00`,
                      is_active: true,
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
                      {...register("brand")}
                    />
                    <span>{errors.brand?.message}</span>

                    <label htmlFor="email">Modelo</label>
                    <input
                      type="name"
                      id="modelo"
                      placeholder="Ex. A 200 CGI ADVANCE SEDAN"
                      {...register("model")}
                    />
                    <span>{errors.model?.message}</span>

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
                        {...register("year")}
                      />

                      <span>{errors.year?.message}</span>
                    </div>

                    <div>
                      <label htmlFor="email">Combustível</label>
                      <input
                        type="text"
                        id="combustivel"
                        placeholder="Ex. Elétrico"
                        {...register("fuel")}
                      />

                      <span>{errors.fuel?.message}</span>
                    </div>
                  </div>
                  <div className="inline-fields">
                    <div>
                      <label htmlFor="email">Quilometragem</label>
                      <input
                        type="text"
                        id="quilometragem"
                        placeholder="Ex. 201"
                        {...register("km")}
                      />

                      <span>{errors.km?.message}</span>
                    </div>

                    <div>
                      <label htmlFor="email">Cor</label>
                      <input
                        type="text"
                        id="cor"
                        placeholder="Ex. Rosa"
                        {...register("color")}
                      />

                      <span>{errors.color?.message}</span>
                    </div>
                  </div>
                  <div className="inline-fields">
                    <div>
                      <label htmlFor="email">Tabela FIPE</label>
                      <input
                        type="text"
                        placeholder={`R$: ${price}`}
                        {...register("fipe_table")}
                      />
                    </div>

                    <div>
                      <label htmlFor="email">Preço</label>
                      <input
                        type="text"
                        id="preco"
                        placeholder="Ex. 100000"
                        {...register("price")}
                      />

                      <span>{errors.price?.message}</span>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email">Descrição</label>
                    <input
                      type="text"
                      id="descricao"
                      placeholder="Ex. O carro se encontra em tais condições..."
                      {...register("description")}
                    />

                    <span>{errors.description?.message}</span>

                    {arrayID.map((field: any, index: any) => {
                      return (
                        <>
                          <label htmlFor="email">Cole a URL da Imagem</label>
                          <input
                            key={field.id}
                            type="text"
                            id="img-capa2"
                            placeholder="Ex. https://imagem.com"
                            {...register(`images.${index}.url`)}
                          />
                          <span>{errors.images?.message}</span>
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
      </>
    )
  );
}

export default AdminPage;
