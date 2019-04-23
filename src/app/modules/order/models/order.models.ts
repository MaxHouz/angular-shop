import { Product } from '../../products/models/product.model';

export class Order {
  constructor(
    public items: Product[],
    public price: number,
    public address: string,
    public date: Date,
    public done: boolean = false
  ) {}
}
