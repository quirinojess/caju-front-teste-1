import { TStatusRegistration } from "../TStatus";

export type TButton =  {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: TStatusRegistration;
  }
  