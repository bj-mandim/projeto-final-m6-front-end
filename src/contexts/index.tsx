import { createContext, useContext, useEffect, useState } from "react";
import { apiCards, apiKenzieCards } from "./api";
import { useLocation, useNavigate } from "react-router-dom";
import filter from "../pages/AdminPage/filter";
import { UserContext } from "./userContext";

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

  const { setUserPage }: any = useContext(UserContext);
  const token = localStorage.getItem("authToken");
  console.log(token);

  //CARDS ROTAS
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

  //TABELA FIPE ROTAS

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

  //USER ROTAS

  function listUserId(id: string) {
    apiCards
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserPage(res.data);
      })
      .catch((err) => {
        console.log(id);
        console.log(err);
      });
  }

  //REDEFINIR SENHA ROTAS

  function sendEmailUser(email: string) {
    apiCards
      .post(`/users/resetPassword`)
      .then((res) => {
        //retorno de uma mensagem toast, token enviado;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function resetPasswordUser(password: string, token: string) {
    apiCards
      .patch(`/users/resetPassword/${token}`)
      .then((res) => {
        //retorno de uma mensagem toast, token enviado;
        //O token enviado na requisição a cima tem que passar pra cá para colocar no bearer
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
        listUserId,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
}

export default ApiState;
