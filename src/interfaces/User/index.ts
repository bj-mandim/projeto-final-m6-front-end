import { ICard } from "../Car";

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
  cars:ICard[]
}

export interface iUserContext {
  registerUser: (data: iFormSignup) => Promise<void>;
  loginUser: (data: iFormLogin) => Promise<void>;
  globalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: iUser|null;
  userPage: iUser;
  setUserPage(userPage:iUser):void;
  patchUser(data:iFormSignup):void
}

export interface iFormComment{
  comment:string
}
