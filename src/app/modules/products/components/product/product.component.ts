import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import * as RouterActions from '../../../../core/store/router/router.actions';

import { Product } from '../../models/product.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../core/store/app.state';


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
    private store: Store<AppState>
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
    this.store.dispatch(new RouterActions.Go({
      path: ['/product', this.product.id]
    }));
  }
}
