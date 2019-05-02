import { Product } from '../../products/models/product.model';

export class Order {
  constructor(
    public id: number,
    public items: Product[],
    public price: number,
    public address: string,
    public date: number,
    public completed: boolean = false
  ) {}
}
