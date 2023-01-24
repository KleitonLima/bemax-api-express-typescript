export interface User {
  id: string;
  email: string;
  password: string;
}

export interface Kiosk {
  id: string;
  name: string;
  price: number;
  quantity: number;
  date: Date;
  entrance: number;
  hours: number;
}
