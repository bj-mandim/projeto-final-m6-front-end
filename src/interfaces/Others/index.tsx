import { ReactNode } from "react";
import { iUser } from "../User";

export interface iProvidersProps {
  children: ReactNode;
}

export interface IAvatarProps {
  user: iUser;
  setOptionsOpen: any;
} //criar dessa interface, outra que suporte os novos dados que chegaram no avatar.

export interface iButtonProps {
  medium?: boolean;
  model?: string;
  widths?: number;
}

export interface IImages {
  id: string;
  url: string;
}

export interface IImage {
  url: string;
}
