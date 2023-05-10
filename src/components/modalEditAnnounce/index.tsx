// import { HeaderLogin } from "../header";
// import { Profile } from "../profile";
// import CardUserAdmin from "../card/UserAdminPage";
// import { ContextApi } from "../../contexts";
// import { useContext } from "react";
// import { IoClose } from "react-icons/io5";
// import { FormModal } from "../form/style";
// import { StyleModal } from "../modal/style";
// import Pagination from "../pagination";
// import { Footer } from "../footer";
// import Button from "../button/style";
// import { UserContext } from "../../contexts/userContext";
// import { yupResolver } from "@hookform/resolvers/yup";
// import {
//   schemaCreateAnnouncement,
//   schemaPatchAnnouncement,
// } from "../../validators";
// import {
//   iFormCreateAnnouncement,
//   iFormUpdateAnnouncement,
// } from "../../interfaces/Car";
// import { CarsContext } from "../../contexts/carsContext";
// import { useForm } from "react-hook-form";

export function modalEditAnnounce() {
  //   const formCreateAnnounce = useForm<iFormCreateAnnouncement>({
  //     resolver: yupResolver(schemaCreateAnnouncement),
  //   });
  //   const formEditAnnounce = useForm<iFormUpdateAnnouncement>({
  //     resolver: yupResolver(schemaPatchAnnouncement),
  //   });
  //   const { createAnnouncement, updateAnnouncement }: any =
  //     useContext(CarsContext);
  //   function fipeTable(model: any, brand: any) {
  //     if (brand!) {
  //       getFipeTable(brand.value, model.value);
  //     }
  //   }
  //   return (
  //     <StyleModal>
  //       <div className="modal-wrapper">
  //         <div className="container-form">
  //           <FormModal
  //             onSubmit={formEditAnnounce.handleSubmit((info) => {
  //               updateAnnouncement({
  //                 ...info,
  //                 fipe_table: `${price}.00`,
  //                 is_active: true,
  //               });
  //             })}
  //           >
  //             <div className="modal-header">
  //               <h2 className="header_register">Editar Anuncio</h2>
  //               <Button
  //                 type="button"
  //                 model="model-5"
  //                 onClick={() => setCarModalOpen(false)}
  //               >
  //                 <IoClose />
  //               </Button>
  //             </div>
  //             <br />
  //             <strong>Informações do veículo</strong>
  //             <div className="content_register">
  //               <label htmlFor="email">Marca</label>
  //               <input
  //                 type="name"
  //                 id="marca"
  //                 placeholder="Ex. Mercedes Benz"
  //                 {...formEditAnnounce.register("brand")}
  //               />
  //               <span>{formEditAnnounce.formState.errors.brand?.message}</span>
  //               <label htmlFor="email">Modelo</label>
  //               <input
  //                 type="name"
  //                 id="modelo"
  //                 placeholder="Ex. A 200 CGI ADVANCE SEDAN"
  //                 {...formEditAnnounce.register("model")}
  //               />
  //               <span>{formEditAnnounce.formState.errors.model?.message}</span>
  //               <div className="content_register">
  //                 <label htmlFor="email">Ano</label>
  //                 <input
  //                   onClick={(e) => {
  //                     e.preventDefault();
  //                     const marcaValue = document.querySelector("#marca");
  //                     const modeloValue = document.querySelector("#modelo");
  //                     setBrand(marcaValue);
  //                     setModel(modeloValue);
  //                     fipeTable(model, brand);
  //                   }}
  //                   type="text"
  //                   placeholder="Ex. 2018"
  //                   {...formEditAnnounce.register("year")}
  //                 />
  //               </div>
  //               <span>{formEditAnnounce.formState.errors.year?.message}</span>
  //               <div>
  //                 <label htmlFor="email">Combustível</label>
  //                 <input
  //                   type="text"
  //                   id="combustivel"
  //                   placeholder="Ex. Elétrico"
  //                   {...formEditAnnounce.register("fuel")}
  //                 />
  //               </div>
  //             </div>
  //             <div className="inline-fields">
  //               <div>
  //                 <label htmlFor="email">Quilometragem</label>
  //                 <input
  //                   type="text"
  //                   id="quilometragem"
  //                   placeholder="Ex. 201"
  //                   {...formEditAnnounce.register("km")}
  //                 />
  //               </div>
  //               <div>
  //                 <label htmlFor="email">Cor</label>
  //                 <input
  //                   type="text"
  //                   id="cor"
  //                   placeholder="Ex. Rosa"
  //                   {...formEditAnnounce.register("color")}
  //                 />
  //               </div>
  //             </div>
  //             <div className="inline-fields">
  //               <div>
  //                 <label htmlFor="email">Tabela FIPE</label>
  //                 <input
  //                   type="text"
  //                   placeholder={`R$: ${price}`}
  //                   {...formEditAnnounce.register("fipe_table")}
  //                 />
  //               </div>
  //               <div>
  //                 <label htmlFor="email">Preço</label>
  //                 <input
  //                   type="text"
  //                   id="preco"
  //                   placeholder="Ex. 100000"
  //                   {...formEditAnnounce.register("price")}
  //                 />
  //               </div>
  //             </div>
  //             <div>
  //               <label htmlFor="email">Descrição</label>
  //               <input
  //                 type="text"
  //                 id="descricao"
  //                 placeholder="Ex. O carro se encontra em tais condições..."
  //                 {...formEditAnnounce.register("description")}
  //               />
  //               {arrayID.map((field: any, index: any) => {
  //                 return (
  //                   <>
  //                     <label htmlFor="email">Cole a URL da Imagem</label>
  //                     <input
  //                       key={field.id}
  //                       type="text"
  //                       id="img-capa2"
  //                       placeholder="Ex. https://imagem.com"
  //                       {...formEditAnnounce.register(`images.${index}.url`)}
  //                     />
  //                   </>
  //                 );
  //               })}
  //             </div>
  //             <Button model="model-form">Excluir Anúncio</Button>
  //             <Button model="model-form">Salvar Alterações</Button>
  //           </FormModal>
  //         </div>
  //       </div>
  //     </StyleModal>
  //   );
}
