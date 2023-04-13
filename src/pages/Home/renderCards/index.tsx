/* eslint-disable array-callback-return */
// import { StyledCards } from "./style";

import { StyledCards } from "../../../components/card/style";

interface iCardProps {
  getCars: car[]
}

interface car {
  is_active:boolean,
  brand: string,
  model: string
  description: string,
  km: number,
  year: number,
  price: string,
}

const Card = ({ getCars }: iCardProps) => {
  console.log(getCars);
  return (<>
  <StyledCards>
    <div className="boxImage">
      <img src="../../../img/Car.png" alt="" />
      <span className="statusCar">Ativo</span>
    </div>
    <div className="descriptionCar">
      <h1>Carrinho Bonito</h1>
      <p>Description do carrinho bonito só que aqui tem que ser grande pra poder colocar o negocinho para ela sumir caso ela seja muito grande pra não atrapalhar a lindeza que esse card vai ficar</p>
      <div className="boxUser">
        <img src="" alt="" />
        <h2>Elias Borges</h2>
      </div>
      <div className="boxKmYearPrice">
        <div className="kmYear">
          <span className="KMCar">0 KM</span>
          <span className="yearCar">2023</span>
        </div>
        <span className="priceCar">R$ 100.000,00</span>
      </div>
    </div>
  </StyledCards>
  {
    getCars.map((car)=>{
       return(<>
      {/* {
      is_active: false,
      brand: "Ford",
      model: "Exemplo",
      description: "description",
      km: 2,
      year: 2020,
      price: "R$00.000,00",
    }, */}

      {/* <StyledCards> */}
      {/* <li> */}
      <h1>{car.is_active}</h1>
      {/* <img src={car.img} alt={getCars} /> */}
      <h1>
        {car.brand} - {car.model}
      </h1>
      <p>{car.description}</p>
      {/* <img src={user.img} alt={user} /> */}
      {/* <p>{user.name}</p> */}
      <p>{car.km}</p>
      <span>{car.year}</span>
      <span>{car.price}</span>
      {/* </li> */}
      {/* </StyledCards> */}
    </>);
    })
  }
  </>)
};

export default Card;
