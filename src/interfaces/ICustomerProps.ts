import { ICustomer } from "./ICustomer";

export interface ICustomerProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  data: ICustomer[];
}
