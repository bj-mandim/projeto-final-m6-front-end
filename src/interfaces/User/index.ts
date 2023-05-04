export interface IUser {
  id: string;
  name: string;
  email: string;
  is_announcer: boolean;
  description: string;
  phone: string;
  cpf: string;
  birth: string;
  image: {
    url: string;
  };
}
