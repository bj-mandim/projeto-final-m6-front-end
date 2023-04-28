import { createContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiCards } from "./api";
import { ICard } from "../components/card/Home";

interface iProvidersProps {
  children: ReactNode;
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
    number: string; //number
    complement: string;
  };
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  is_announcer: boolean;
  description: string;
  phone: string;
  cpf: string;
  birth: string;
  reset_token: null; //Verificar esse retorno
  image_url?: string;
  address: {
    id: string;
    cep: string;
    state: string;
    city: string;
    street: string;
    number: number; //Verificar compatibilidade com o front
    complement: string;
  };
}

interface iUserContext {
  registerUser: (data: iFormSignup) => Promise<void>;
  loginUser: (data: iFormLogin) => Promise<void>;
  globalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext({} as any);

const Providers = ({ children }: iProvidersProps) => {
  const [globalLoading, setGlobalLoading] = useState<boolean>(false);
  const [user, setUser] = useState<iUser | null>(null);
  const [userPage, setUserPage] = useState<iUser | null>(null);

  const token = localStorage.getItem("@Token_cars_shop");
  const navigate = useNavigate();

  async function loginUser(data: iFormLogin): Promise<void> {
    setGlobalLoading(true);
    try {
      const response = await apiCards.post("/login", data);

      localStorage.setItem("@Token_cars_shop", response.data.access_token);

      await getProfile();

      toast.success("Login realizado com sucesso!");
      navigate(`/`);
    } catch (error) {
      toast.error("Email ou senha invalidos. Por favor, tente novamente.");
    } finally {
      setGlobalLoading(false);
    }
  }

  async function registerUser(data: iFormSignup): Promise<void> {
    try {
      const formatedData = {
        ...data,
        address: { ...data.address, number: parseInt(data.address.number) },
      };
      await apiCards.post("/users", formatedData);

      navigate("/login");
      toast.success("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Esse usuáio já está cadastrado!");
    }
  }

  async function getProfile() {
    const token = localStorage.getItem("@Token_cars_shop");
    if (token) {
      try {
        const { data } = await apiCards.get<iUser>(`users/profile/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        console.log(data, "USER COM CARROS");
      } catch (error) {
        localStorage.removeItem("@TOKEN");
        setUser(null);
      }
    }
  }

  return (
    <UserContext.Provider
      value={{
        registerUser,
        loginUser,
        globalLoading,
        setGlobalLoading,
        user,
        userPage,
        setUserPage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Providers;
