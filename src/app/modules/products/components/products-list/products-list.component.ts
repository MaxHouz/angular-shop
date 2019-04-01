import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';

import { CartService } from '../../../../core/services/cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public productsList: Product[];

  constructor(
    private cartService: CartService,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.productsList = this.productsService.getProducts();
  }

  onBuy(product: Product) {
    alert(`You bought ${product.name}`);
  }

  onAddToCart(product: Product) {
    this.cartService.addProduct(product);
  }
}
