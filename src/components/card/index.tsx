import { CardsList, StyledCards } from "./style";
import { ContextApi } from "../../contexts";
import { useContext } from "react";
import car from "../../img/Car.png";

interface iCardProps {
  getCars: ICard[];
}

interface IImages {
  id: string;
  url: string;
}

interface ICard {
  brand: string;
  color: string;
  description: string;
  fipe_table: number;
  fuel: string;
  id: string;
  images: IImages[];
  is_active: boolean;
  km: number;
  model: string;
  price: string;
  year: number;
}

const Card = () => {
  const { getCardId, listCards }: any = useContext(ContextApi);

  return (
    <>
      <CardsList>
        {listCards.map((car: ICard) => {
          return (
            <>
              <StyledCards
                onClick={() => {
                  getCardId(car.id);
                }}
              >
                <div className="boxImage">
                  <img src={car.images[0].url} alt="car-image" />
                  <span className="statusCar">Ativo</span>
                </div>
                <div className="descriptionCar">
                  <h1>{car.model}</h1>
                  <p>{car.description}</p>
                  <div className="boxUser">
                    <img src={car.images[0].url} alt="user-photo" />
                    <h2>Claudio</h2>
                  </div>
                  <div className="boxKmYearPrice">
                    <div className="kmYear">
                      <span className="KMCar">{`${car.km} KM`}</span>
                      <span className="yearCar">{car.year}</span>
                    </div>
                    <span className="priceCar">{`R$: ${car.price}`}</span>
                  </div>
                </div>
              </StyledCards>
            </>
          );
        })}

        <StyledCards>
            <div className="boxImage">
              <img src={car} alt="car-image" />
              <span className="status" id="ativo">Ativo</span>
              <span className="moneySign">$</span>
            </div>

            <figcaption className="description">
              <h3 className="heading-7">Maserati - Ghibli</h3>
              <p className="body-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...</p>

              <div className="boxUser">
                <img src={car} alt="user-photo" />
                <p className="body-2">Claudio</p>
              </div>

              <div className="boxExtraInfo">
                <ul className="boxFilterInfo">
                  <li>0 KM</li>
                  <li>2019</li>
                </ul>

                <span className="price heading-7">R$ 00.000,00</span>
              </div>
            </figcaption>
        </StyledCards>
        <StyledCards>
            <div className="boxImage">
              <img src={car} alt="car-image" />
              <span className="status" id="ativo">Ativo</span>
              <span className="moneySign">$</span>
            </div>

            <figcaption className="description">
              <h3 className="heading-7">Maserati - Ghibli</h3>
              <p className="body-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...</p>

              <div className="boxUser">
                <img src={car} alt="user-photo" />
                <p className="body-2">Claudio</p>
              </div>

              <div className="boxExtraInfo">
                <ul className="boxFilterInfo">
                  <li>0 KM</li>
                  <li>2019</li>
                </ul>

                <span className="price heading-7">R$ 00.000,00</span>
              </div>
            </figcaption>
        </StyledCards>
        <StyledCards>
            <div className="boxImage">
              <img src={car} alt="car-image" />
              <span className="status" id="ativo">Ativo</span>
              <span className="moneySign">$</span>
            </div>

            <figcaption className="description">
              <h3 className="heading-7">Maserati - Ghibli</h3>
              <p className="body-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...</p>

              <div className="boxUser">
                <img src={car} alt="user-photo" />
                <p className="body-2">Claudio</p>
              </div>

              <div className="boxExtraInfo">
                <ul className="boxFilterInfo">
                  <li>0 KM</li>
                  <li>2019</li>
                </ul>

                <span className="price heading-7">R$ 00.000,00</span>
              </div>
            </figcaption>
        </StyledCards>
        <StyledCards>
            <div className="boxImage">
              <img src={car} alt="car-image" />
              <span className="status" id="ativo">Ativo</span>
              <span className="moneySign">$</span>
            </div>

            <figcaption className="description">
              <h3 className="heading-7">Maserati - Ghibli</h3>
              <p className="body-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...</p>

              <div className="boxUser">
                <img src={car} alt="user-photo" />
                <p className="body-2">Claudio</p>
              </div>

              <div className="boxExtraInfo">
                <ul className="boxFilterInfo">
                  <li>0 KM</li>
                  <li>2019</li>
                </ul>

                <span className="price heading-7">R$ 00.000,00</span>
              </div>
            </figcaption>
        </StyledCards>
        <StyledCards>
            <div className="boxImage">
              <img src={car} alt="car-image" />
              <span className="status" id="ativo">Ativo</span>
              <span className="moneySign">$</span>
            </div>

            <figcaption className="description">
              <h3 className="heading-7">Maserati - Ghibli</h3>
              <p className="body-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...</p>

              <div className="boxUser">
                <img src={car} alt="user-photo" />
                <p className="body-2">Claudio</p>
              </div>

              <div className="boxExtraInfo">
                <ul className="boxFilterInfo">
                  <li>0 KM</li>
                  <li>2019</li>
                </ul>

                <span className="price heading-7">R$ 00.000,00</span>
              </div>
            </figcaption>
        </StyledCards>
        <StyledCards>
            <div className="boxImage">
              <img src={car} alt="car-image" />
              <span className="status" id="ativo">Ativo</span>
              <span className="moneySign">$</span>
            </div>

            <figcaption className="description">
              <h3 className="heading-7">Maserati - Ghibli</h3>
              <p className="body-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...</p>

              <div className="boxUser">
                <img src={car} alt="user-photo" />
                <p className="body-2">Claudio</p>
              </div>

              <div className="boxExtraInfo">
                <ul className="boxFilterInfo">
                  <li>0 KM</li>
                  <li>2019</li>
                </ul>

                <span className="price heading-7">R$ 00.000,00</span>
              </div>
            </figcaption>
        </StyledCards>
      </CardsList>
    </>
  );
};

export default Card;
