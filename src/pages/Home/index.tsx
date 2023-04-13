import Header from "../../components/header";
import Card from "./renderCards";
import { useState } from "react";
import "./style.css";
import Button from "../../components/button/style";
import car from "../../img/Car.png";

function Home() {
  const [getCars, setGetCars] = useState([
    {
      is_active: false,
      brand: "Ford",
      model: "Exemplo",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      km: 2,
      year: 2020,
      price: "120.000,00",
      img_car:
        "https://images.usadosbr.com/manipulatedImages/media/gallery/6a/dc/58/fiat-palio-1-0-fire-celebration-8v-1-2009-sao-paulo-sp-9382637e-xw-image-760x570-crop.webp",
      user: {
        name: "Elias Borges",
        img_user:
          "https://img.freepik.com/fotos-gratis/cliente-masculino-pensativo-olhando-para-longe_74855-3601.jpg?w=360",
      },
    },
    {
      is_active: false,
      brand: "Ford",
      model: "Exemplo",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      km: 2,
      year: 2020,
      price: "120.000,00",
      img_car:
        "https://images.usadosbr.com/manipulatedImages/media/gallery/6a/dc/58/fiat-palio-1-0-fire-celebration-8v-1-2009-sao-paulo-sp-9382637e-xw-image-760x570-crop.webp",
      user: {
        name: "Elias Borges",
        img_user:
          "https://img.freepik.com/fotos-gratis/cliente-masculino-pensativo-olhando-para-longe_74855-3601.jpg?w=360",
      },
    },
    {
      is_active: false,
      brand: "Ford",
      model: "Exemplo",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      km: 2,
      year: 2020,
      price: "120.000,00",
      img_car:
        "https://images.usadosbr.com/manipulatedImages/media/gallery/6a/dc/58/fiat-palio-1-0-fire-celebration-8v-1-2009-sao-paulo-sp-9382637e-xw-image-760x570-crop.webp",
      user: {
        name: "Elias Borges",
        img_user:
          "https://img.freepik.com/fotos-gratis/cliente-masculino-pensativo-olhando-para-longe_74855-3601.jpg?w=360",
      },
    },
    {
      is_active: false,
      brand: "Ford",
      model: "Exemplo",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      km: 2,
      year: 2020,
      price: "120.000,00",
      img_car:
        "https://images.usadosbr.com/manipulatedImages/media/gallery/6a/dc/58/fiat-palio-1-0-fire-celebration-8v-1-2009-sao-paulo-sp-9382637e-xw-image-760x570-crop.webp",
      user: {
        name: "Elias Borges",
        img_user:
          "https://img.freepik.com/fotos-gratis/cliente-masculino-pensativo-olhando-para-longe_74855-3601.jpg?w=360",
      },
    },
    {
      is_active: false,
      brand: "Ford",
      model: "Exemplo",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      km: 2,
      year: 2020,
      price: "120.000,00",
      img_car:
        "https://images.usadosbr.com/manipulatedImages/media/gallery/6a/dc/58/fiat-palio-1-0-fire-celebration-8v-1-2009-sao-paulo-sp-9382637e-xw-image-760x570-crop.webp",
      user: {
        name: "Elias Borges",
        img_user:
          "https://img.freepik.com/fotos-gratis/cliente-masculino-pensativo-olhando-para-longe_74855-3601.jpg?w=360",
      },
    },
    {
      is_active: false,
      brand: "Ford",
      model: "Exemplo",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      km: 2,
      year: 2020,
      price: "120.000,00",
      img_car:
        "https://images.usadosbr.com/manipulatedImages/media/gallery/6a/dc/58/fiat-palio-1-0-fire-celebration-8v-1-2009-sao-paulo-sp-9382637e-xw-image-760x570-crop.webp",
      user: {
        name: "Elias Borges",
        img_user:
          "https://img.freepik.com/fotos-gratis/cliente-masculino-pensativo-olhando-para-longe_74855-3601.jpg?w=360",
      },
    },
  ]);

  return (
    <>
      <Header></Header>
      <main className="main_home">
        <section className="container">
          <div>
            <img src={car} alt="car" />
            <div>
              <h1 className="heading-1">Motors Shop</h1>
              <p className="heading-3">
                A melhor plataforma de anúncios de carros do país
              </p>
            </div>
          </div>
        </section>
        <div className="container_filter_cards">
          <section className="filter_card">
            <div className="filter">
              <div className="container_filter">
                <h3>Marca</h3>
                <Button model="option-filter" widths={50} medium>
                  Porsche
                </Button>
              </div>
              <div className="container_filter">
                <h3>Modelo</h3>
                <Button model="option-filter" widths={60} medium>
                  Porsche 718
                </Button>
              </div>
              <div className="container_filter">
                <h3>Cor</h3>
                <Button model="option-filter" widths={50} medium>
                  Azul
                </Button>
                <Button model="option-filter" widths={50} medium>
                  Branca
                </Button>
                <Button model="option-filter" widths={50} medium>
                  Cinza
                </Button>
                <Button model="option-filter" widths={50} medium>
                  Prata
                </Button>
                <Button model="option-filter" widths={50} medium>
                  Preta
                </Button>
                <Button model="option-filter" widths={50} medium>
                  Verde
                </Button>
              </div>
              <div className="container_filter">
                <h3>Ano</h3>
                <Button model="option-filter" widths={50} medium>
                  2022
                </Button>
                <Button model="option-filter" widths={50} medium>
                  2021
                </Button>
                <Button model="option-filter" widths={50} medium>
                  2018
                </Button>
                <Button model="option-filter" widths={50} medium>
                  2015
                </Button>
                <Button model="option-filter" widths={50} medium>
                  2013
                </Button>
                <Button model="option-filter" widths={50} medium>
                  2012
                </Button>
                <Button model="option-filter" widths={50} medium>
                  2010
                </Button>
              </div>

              <div className="container_filter">
                <h3>Combustível</h3>
                <Button model="option-filter" widths={50} medium>
                  Diesel
                </Button>
                <Button model="option-filter" widths={50} medium>
                  Etanol
                </Button>
                <Button model="option-filter" widths={50} medium>
                  Gasolina
                </Button>
                <Button model="option-filter" widths={50} medium>
                  Flex
                </Button>
              </div>

              <div className="container_max_min">
                <h3>Km</h3>
                <div>
                  <Button model="max_min_filter" widths={45} medium>
                    Mínina
                  </Button>
                  <Button model="max_min_filter" widths={45} medium>
                    Máxima
                  </Button>
                </div>
              </div>

              <div className="container_max_min">
                <h3>Preço</h3>
                <div>
                  <Button model="max_min_filter" widths={45} medium>
                    Mínino
                  </Button>
                  <Button model="max_min_filter" widths={45} medium>
                    Máximo
                  </Button>
                </div>
              </div>
            </div>
            <div className="button_clear_filter">
              <Button model="model-4">Limpar Filtros</Button>
            </div>
          </section>
          <section className="render_cards">
            <Card getCars={getCars} />
          </section>
        </div>
      </main>
    </>
  );
}

export default Home;
