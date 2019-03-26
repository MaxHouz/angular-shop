import {Component, Input, OnInit} from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  onBuy(): void {
    alert(`You bought ${this.product.name}`);
  }
  onAddToCart(): void {
    this.cartService.addProduct(this.product);
  }
}
