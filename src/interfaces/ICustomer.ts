export interface ICustomer {
  name: string;
  phone: string;
  email: string;
  distanceToOrigin: number;
  position: number;
  id: number;
  userId: number;
}

export interface INewCustomer {
  name: string;
  phone: string;
  email: string;
  x: number;
  y: number;
}
