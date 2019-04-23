import {
  OnInit,
  Component,
  ChangeDetectionStrategy, DoCheck,
} from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../../products/models/product.model';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartModalComponent implements OnInit, DoCheck {

  lastUpdated: number;
  sortingOrder: boolean;
  selectedSorting: string;

  constructor(
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    this.lastUpdated = Date.now();
  }

  getProductsFromCart(): Product[] {
    return this.cartService.getCartList();
  }

  getCartTotal(): number {
    return this.cartService.getCartTotal();
  }

  onDeleteProduct(product: Product): void {
    this.cartService.deleteProduct(product);
  }

  onIncreaseQuantity(id: number): void {
    this.cartService.increaseQuantity(id);
  }

  onDecreaseQuantity(id: number): void {
    this.cartService.decreaseQuantity(id);
  }

  isCartEmpty(): boolean {
    return this.cartService.isCartEmpty();
  }

  order(): void {
    this.router.navigate(['/order']);
  }

  getSortingOrder(): string {
    return this.sortingOrder ? 'Ascending' : 'Descending';
  }
}
