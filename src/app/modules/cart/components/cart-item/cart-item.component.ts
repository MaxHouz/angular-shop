import {
  Input,
  Output,
  OnInit,
  Component,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Product } from '../../../products/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input() cartProduct: Product;
  @Output() deleteProduct = new EventEmitter<Product>();
  @Output() increaseQuantity = new EventEmitter<number>();
  @Output() decreaseQuantity = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onDeleteProduct(): void {
    this.deleteProduct.emit(this.cartProduct);
  }

  onIncreaseQuantity(id: number): void {
    this.increaseQuantity.emit(id);
  }

  onDecreaseQuantity(id: number): void {
    this.decreaseQuantity.emit(id);
  }
}
