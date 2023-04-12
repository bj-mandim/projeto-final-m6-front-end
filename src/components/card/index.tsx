/* eslint-disable array-callback-return */
// import { StyledCards } from "./style";

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
