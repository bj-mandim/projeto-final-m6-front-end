import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiCards } from "./api";
import { iFormLogin } from "../interfaces/User";
import { iFormSignup } from "../interfaces/User";
import { iUser } from "../interfaces/User";
import { iProvidersProps } from "../interfaces/Others";

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
