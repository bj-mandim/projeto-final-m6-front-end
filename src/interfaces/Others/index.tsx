import { ReactNode } from "react";
import { iUser } from "../User";

export interface iProvidersProps {
  children: ReactNode;
}

export interface iChildren {
  children: React.ReactNode;
}

export interface IAvatarProps {
  user: iUser;
  setOptionsOpen: any;
}

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
