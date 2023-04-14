import { createContext, useEffect, useState } from "react";
import { apiCards } from "./api";
import { useNavigate } from "react-router-dom";

interface iChildren {
  children: React.ReactNode;
}

export const ContextApi = createContext({});

function ApiState({ children }: iChildren) {
  const navigate = useNavigate();
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
        console.log(card);
        navigate("/product");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getCards();
  }, []);

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
