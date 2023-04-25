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
  const [isOpen, setIsOpen] = useState(false);

  function getCards() {
    apiCards
      .get(`/cars`)
      .then((res) => {
        setListCards(res.data);
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
<<<<<<< HEAD
=======
        registerUser,
        isOpen,
        setIsOpen,
>>>>>>> 3a4634c3af5eab0d74289ef742716832e15c37d1
      }}
    >
      {children}
    </ContextApi.Provider>
  );
}

export default ApiState;
