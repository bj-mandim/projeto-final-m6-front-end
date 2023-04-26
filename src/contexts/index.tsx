import { createContext, useEffect, useState } from "react";
import { apiCards, kenzieCars } from "./api";
import { useLocation, useNavigate } from "react-router-dom";

interface iChildren {
  children: React.ReactNode;
}

export interface iFormLogin {
  email: string;
  password: string;
}

export const ContextApi = createContext({});

function ApiState({ children }: iChildren) {
  const navigate = useNavigate();
  const location = useLocation();
  const [listCards, setListCards] = useState([]);
  const [fipeTable, setFipeTable] = useState<any>({});
  const [card, setCard] = useState({});
  const [idCar, setIdCar] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [infosOpen, setInfosOpen] = useState(false);

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

  function getFipeCars() {
    kenzieCars
      .get(`/cars`)
      .then((res) => {
        setFipeTable(res.data);
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
        navigate("/");
      });
  }

  function checkCarId() {
    const id = localStorage.getItem("@Last_view");

    id ? getCardId(id) : navigate("/");
  }

  useEffect(() => {
    getFipeCars();
    getCards();
  }, []);

  useEffect(() => {
    if (location.pathname === "/product") {
      checkCarId();
    }
  }, []);

  return (
    <ContextApi.Provider
      value={{
        listCards,
        card,
        setCard,
        getCardId,
        idCar,
        isOpen,
        setIsOpen,
        infosOpen,
        setInfosOpen,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
}

export default ApiState;
