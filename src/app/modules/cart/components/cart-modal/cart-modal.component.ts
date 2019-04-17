import {
  OnInit,
  Component,
  ChangeDetectionStrategy, DoCheck,
} from '@angular/core';
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
  filteringOrder: boolean;
  selectedSorting: string;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    this.lastUpdated = Date.now();
    console.log(this.filteringOrder);
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
    alert(`Your order price is: $${this.getCartTotal()}`);
    this.cartService.cleanCart();
  }

  getSortingOrder(): string {
    return this.sortingOrder ? 'Ascending' : 'Descending';
  }
}
