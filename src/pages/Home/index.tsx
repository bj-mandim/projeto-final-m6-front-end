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
      description: "description",
      km: 2,
      year: 2020,
      price: "R$00.000,00",
    },

    {
      is_active: false,
      brand: "Ford",
      model: "Exemplo",
      description: "description",
      km: 2,
      year: 2020,
      price: "R$00.000,00",
    },

    {
      is_active: false,
      brand: "Ford",
      model: "Exemplo",
      description: "description",
      km: 2,
      year: 2020,
      price: "R$00.000,00",
    },

    {
      is_active: false,
      brand: "Ford",
      model: "Exemplo",
      description: "description",
      km: 2,
      year: 2020,
      price: "R$00.000,00",
    },

    {
      is_active: false,
      brand: "Ford",
      model: "Exemplo",
      description: "description",
      km: 2,
      year: 2020,
      price: "R$00.000,00",
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
            {/* Elias */}
            <Card getCars={getCars} />
          </section>
        </div>
      </main>
    </>
  );
}

export default Home;
