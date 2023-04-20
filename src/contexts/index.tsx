import { createContext, useEffect, useState } from "react";
import { apiCards } from "./api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface iChildren {
  children: React.ReactNode;
}

export interface iFormLogin {
  email: string;
  password: string;
}

export interface iFormSignup {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birth: string;
  description: string;
  image_url?: string;
  is_announcer: boolean;
  password: string;
  confirmPassword: string;
  address: {
    cep: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface iUserContext {
  registerUser: (data: iFormSignup) => Promise<void>;
  signInUser: (data: iFormLogin) => Promise<void>;
  globalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
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

  async function registerUser(data: iFormSignup): Promise<void> {
    try {
      await apiCards.post("/users", data);

      navigate("/login");
      toast.success("Usuário cadastrado com sucesso!");
    } catch (error) {
      toast.error("Esse usuário já existe!");
    }
  }

  return (
    <ContextApi.Provider
      value={{
        listCards,
        card,
        setCard,
        getCardId,
        idCar,
        registerUser
      }}
    >
      {children}
    </ContextApi.Provider>
  );
}

export default ApiState;
