import { Product } from '../../products/models/product.model';
import { ShippingDetails } from './shipping-details.models';

export class Order {
  constructor(
    public products: Product[],
    public firstName: string,
    public lastName: string,
    public email: string,
    public phones: string[],
    public shippingDetails: ShippingDetails,
    public id?: number
  ) {}
}
