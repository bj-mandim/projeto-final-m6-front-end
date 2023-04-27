import { createContext, useEffect, useState } from "react";
import { apiCards, apiKenzieCards } from "./api";
import { useLocation, useNavigate } from "react-router-dom";
import filter from "../pages/AdminPage/filter";

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
  const [card, setCard] = useState({});
  const [idCar, setIdCar] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [adressModalOpen, setadressModalOpen] = useState(false);
  const [infosOpen, setInfosOpen] = useState(false);
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [model, setModel] = useState();
  const [brand, setBrand] = useState();
  const [price, setPrice] = useState("");

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
        navigate("/");
      });
  }

  function getFipeTable(brand: string, model: string) {
    apiKenzieCards
      .get(`/cars?brand=${brand}`)
      .then((res) => {
        setPrice(filter(res.data, model));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function checkCarId() {
    const id = localStorage.getItem("@Last_view");

    id ? getCardId(id) : navigate("/");
  }

  useEffect(() => {
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
        getFipeTable,
        model,
        brand,
        setBrand,
        setModel,
        price,
        setPrice,
        optionsOpen,
        setOptionsOpen,
        adressModalOpen,
        setadressModalOpen,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
}

export default ApiState;
