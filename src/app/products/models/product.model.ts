import { IProduct } from './product.interface';

export class Product implements IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  isAvailable: boolean;
}
