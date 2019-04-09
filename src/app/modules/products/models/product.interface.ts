export interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  isAvailable: boolean;
  quantity?: number;
}
