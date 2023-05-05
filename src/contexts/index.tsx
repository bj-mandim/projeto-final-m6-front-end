import { createContext, useEffect, useState } from "react";
import { apiCards, apiKenzieCards } from "./api";
import { useLocation, useNavigate } from "react-router-dom";
import filter from "../pages/AdminPage/filter";
import { iUser } from "../interfaces/User";
import { toast } from "react-toastify";
import { IComment } from "../interfaces/Car";

interface iChildren {
  children: React.ReactNode;
}

export const ContextApi = createContext({} as any);

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
  const [userPage, setUserPage] = useState<iUser | null>(null);

  const token = localStorage.getItem("authToken");

  //CARDS ROTAS
  async function getCards() {
    await apiCards
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
        localStorage.setItem("@Last_view_car", id);
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

  //USER ROTAS (LIST USER ID GABRIEL)

  function listUserId(id: string) {
    apiCards
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserPage(res.data);
        localStorage.setItem("@Last_view_user", res.data.id);
        navigate(`/user-page`);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Não foi possível carregar a página do usuário");
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

  //Comentários
  async function makeComment(comment:any){
    const token = localStorage.getItem("@Token_cars_shop");
    if (token) {
      try {
        await apiCards.post(`cars/${idCar}/comments`,comment, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        attComments()
        toast.success("Comentário criado com Sucesso!");
      } catch (error) {
        console.log(error)
        toast.error("Erro ao criar o comentário!");
      }
    }
    }

  async function attComments(){
      try {
        const { data } = await apiCards.get(`cars/${idCar}/comments`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCard({...card,comments:data})
      } catch (error) {
        console.log(error)
      }
  }

  function checkCarId() {
    const id = localStorage.getItem("@Last_view_car");

    id ? getCardId(id) : navigate("/");
  }

  function checkPageUserId() {
    const id = localStorage.getItem("@Last_view_user");

    id ? listUserId(id) : navigate("/");
  }

  useEffect(() => {
    getCards();
  }, []);

  useEffect(() => {
    if (location.pathname === "/product") {
      checkCarId();
    } else if (location.pathname === "/user-page") {
      checkPageUserId();
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
        setUserPage,
        userPage,
        makeComment
      }}
    >
      {children}
    </ContextApi.Provider>
  );
}

export default ApiState;
