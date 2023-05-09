import { ReactNode } from "react";
import { IImage, IImages } from "../Others";
import { iUser } from "../User";

export interface iFormCreateAnnouncement {
  brand: string;
  model: string;
  year: number;
  fuel: string;
  km: number;
  color: string;
  price: string;
  fipe_table: string;
  description: string;
  is_active: boolean;
  images: IImage[];
}

export interface iFormUpdateAnnouncement {
  brand?: string;
  model?: string;
  year?: number;
  fuel?: string;
  km?: number;
  color?: string;
  price?: string;
  fipe_table?: string;
  description?: string;
  is_active?: boolean;
  images?: IImage[];
}
export interface IProvidersCarsProps {
  children: ReactNode;
}

export interface ICarsCreate {
  brand: string;
  model: string;
  color: string;
  fuel: string;
  description: string;
  km: number;
  year: number;
  fipe_table?: number;
  price: number;
  images: {
    image_one?: string;
    image_two?: string;
    image_three?: string;
  };
  comments: IComment[];
}

export interface IComment {
  id: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  User: {
    id: string;
    image_url?: string;
    name: string;
  };
}

export interface IBrandObject {
  chevrolet: Array<Object>;
  citroën: Array<Object>;
  fiat: Array<Object>;
  ford: Array<Object>;
  honda: Array<Object>;
  hyundai: Array<Object>;
  nissan: Array<Object>;
  peugeot: Array<Object>;
  renault: Array<Object>;
  toyota: Array<Object>;
  volkswagen: Array<Object>;
}

export interface ICarsContext {
  modalCars: boolean;
  setModalAds: React.Dispatch<React.SetStateAction<boolean>>;
  carsTableKenzie: IBrandObject;
  setCarsTableKenzie: React.Dispatch<React.SetStateAction<IBrandObject>>;
  brandSelect: string;
  setBrandSelect: React.Dispatch<React.SetStateAction<string>>;
  model: IModel[];
  modelSelect: string;
  createComment: (comment: IComment, id: string) => Promise<void>;
  setModelSelect: React.Dispatch<React.SetStateAction<string>>;
  createCars: (data: ICarsCreate) => Promise<void>;
  updateComment: (id: string, data: { message: string }) => Promise<void>;
  deleteComment: (id: string) => Promise<void>;
}

export interface IModel {
  brand: string;
  fuel: number;
  id: string;
  name: string;
  price: number;
  year: number;
}

export interface iCarProps {
  lista: ICard[];
}

export interface ICardListProps {
  cars: ICarsReturn[];
}

export interface ICarsReturn {
  id: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  fuel: string;
  km: number;
  price: number;
  fipe_table?: string;
  description: string;
  is_active: boolean;
  images: {
    id: string;
    image: string;
    image_one?: string;
    image_two?: string;
    image_three?: string;
    image_four?: string;
    image_five?: string;
  };
  user: {
    name: string;
    image_url: string;
    id: string;
  };
}

export interface ICard {
  brand: string;
  color: string;
  description: string;
  fipe_table: number;
  fuel: string;
  id: string;
  images: IImages[];
  is_active: boolean;
  km: number;
  model: string;
  price: string;
  year: number;
  user: iUser;
}
