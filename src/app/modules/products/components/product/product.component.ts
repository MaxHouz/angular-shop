import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() addToCard = new EventEmitter<Product>();
  @Output() buy = new EventEmitter<Product>();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onBuy(): void {
    this.buy.emit(this.product);
  }

  onAddToCart(): void {
    this.addToCard.emit(this.product);
  }

  navigateToProductInfo(): void {
    this.router.navigate(['/product', this.product.id]);
  }
}
