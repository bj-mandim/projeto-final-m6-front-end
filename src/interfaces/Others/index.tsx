import { ReactNode } from "react";

export interface iProvidersProps {
  children: ReactNode;
}

export interface IAvatarProps {
  user: {
    name: string;
    image_url: string | null;
  };
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
