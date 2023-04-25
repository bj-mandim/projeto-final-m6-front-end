import { createContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiCards } from "./api";

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
    number: string;
    complement: string;
  };
}

interface iUserContext {
  registerUser: (data: iFormSignup) => Promise<void>;
  loginUser: (data: iFormLogin) => Promise<void>;
  globalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext({} as iUserContext);

const Providers = ({ children }: iProvidersProps) => {
  const [globalLoading, setGlobalLoading] = useState<boolean>(false);

  const token = localStorage.getItem("");
  const navigate = useNavigate();

  async function loginUser(data: iFormLogin): Promise<void> {
    setGlobalLoading(true);
    try {
      const response = await apiCards.post("/home", data);

      localStorage.setItem("", response.data);

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
      await apiCards.post("/users", data);

      navigate("/login");
      toast.success("Usuário cadastrado com sucesso!");
    } catch (error) {
      toast.error("Esse email já está cadastrado!");
    }
  }

  return (
    <UserContext.Provider
      value={{ registerUser, loginUser, globalLoading, setGlobalLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Providers;
