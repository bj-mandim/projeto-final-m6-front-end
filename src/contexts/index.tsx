import { createContext, useEffect, useState } from "react";
import { apiCards } from "./api";
import { useLocation, useNavigate } from "react-router-dom";

interface iChildren {
  children: React.ReactNode;
}

export interface iFormLogin {
  email: string;
  password: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars

export const ContextApi = createContext({});

function ApiState({ children }: iChildren) {
  const navigate = useNavigate();
  const location = useLocation()
  const [listCards, setListCards] = useState([]);
  const [card, setCard] = useState({});
  const [idCar, setIdCar] = useState("");
  function getCards() {
    apiCards
      .get(`/cars`)
      .then((res) => {
        setListCards(res.data);
        console.log(listCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getCardId(id: string) {
    apiCards
      .get(`/cars/${id}`)
      .then((res) => {
        setCard(res.data);
        setIdCar(id);
        localStorage.setItem("@Last_view",id);
        navigate("/product");
      })
      .catch((err) => {
        console.log(err);
        navigate('/');
      });
  }

  function checkCarId(){
    const id = localStorage.getItem("@Last_view")

    id? getCardId(id): navigate('/');
  }

  useEffect(() => {
    getCards();
  },[]);

  useEffect(() => {
    if(location.pathname === '/product'){
      checkCarId()
    }
  },[]);

  return (
    <ContextApi.Provider
      value={{
        listCards,
        card,
        setCard,
        getCardId,
        idCar,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
}

export default ApiState;
