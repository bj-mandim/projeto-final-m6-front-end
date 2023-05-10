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
    number: string;
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
  reset_token: null;
  image_url?: string;
  address: {
    id: string;
    cep: string;
    state: string;
    city: string;
    street: string;
    number: number;
    complement: string;
  };
  cars: ICard[];
}

export interface iUserContext {
  registerUser: (data: iFormSignup) => Promise<void>;
  loginUser: (data: iFormLogin) => Promise<void>;
  globalLoading: boolean;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: iUser | null;
  userPage: iUser;
  setUserPage(userPage: iUser): void;
  recoveryPassUser: (email: iRecoveyPass) => Promise<void>;
  changePassUser: (data: iChangePass) => Promise<void>;
  setToken: any;
  patchUser(data: iFormSignup): void;
  getProfile(): void;
}

export interface iFormComment {
  comment: string;
}

export interface iRecoveyPass {
  email: string;
}

export interface iChangePass {
  password: string;
  confirmPassword: string;
  resetToken: string;
}
