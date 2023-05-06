import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiCards } from "./api";
import { iChangePass, iFormLogin, iRecoveyPass } from "../interfaces/User";
import { iFormSignup } from "../interfaces/User";
import { iUser } from "../interfaces/User";
import { iProvidersProps } from "../interfaces/Others";
import { ContextApi } from ".";
import { iUserContext } from "../interfaces/User";

export const UserContext = createContext({} as iUserContext);

const Providers = ({ children }: iProvidersProps) => {
  const [globalLoading, setGlobalLoading] = useState<boolean>(false);
  const [user, setUser] = useState<iUser | null>(null);
  const { userPage, setUserPage } = useContext(ContextApi);
  const [token, setToken] = useState("");
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

  async function recoveryPassUser(email: iRecoveyPass) {
    await apiCards
      .post("/users/resetPassword", email)
      .then((res) => {
        toast.success("Link para recuperação de senha enviado com sucesso");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Email inválido");
      });
  }

  async function changePassUser(data: iChangePass) {
    await apiCards
      .patch(`/users/resetPassword/${token}`, data)
      .then((res) => {
        toast.success("Senha alterada com sucesso");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
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
      } catch (error) {
        localStorage.removeItem("@Token_cars_shop");
        setUser(null);
      }
    }
  }

  //Alterar tipagem de data
  async function patchUser(info: any) {
    for (let x in info) {
      if (!info[x]) {
        delete info[x];
      }

      if (x === "address") {
        for (let x in info.address) {
          if (!info.address[x]) {
            delete info.address[x];
          }
        }
        if (!Object.keys(info.address).length) {
          delete info.address;
        }
      }
    }

    if (Object.keys(info).length > 0) {
      const token = localStorage.getItem("@Token_cars_shop");
      if (token) {
        try {
          const { data } = await apiCards.patch<iUser>(
            `users/${user?.id}`,
            info,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          toast.success("Usuário atualizado com sucesso!");
          setUser(data);
        } catch (error) {
          toast.error("Falha em atualizar o usuário");
          console.log(error);
        }
      }
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

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
        recoveryPassUser,
        changePassUser,
        setToken,
        patchUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default Providers;
