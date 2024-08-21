import { TAdmission, TAdmissions } from "../TAdmissions";
import { TStatusRegistration } from "../TStatus";

export type TButton =  {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: TStatusRegistration;
  }
  
  export type TConfirmationModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    message: string;
  };
  
  export type TColumns = {
    registrations?: TAdmissions;
    handleOpenModal: (userId: string, body?: TAdmission) => void;
  };
  
export type TRegistrationCard = {
  data: any;
  handleOpenModal: (userId: string, body?: TAdmission) => void;
};

export type TSearchBar = {
  loadAdmissions: (filterBy?: string, query?: string) => void;
};

export type TIcons = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

