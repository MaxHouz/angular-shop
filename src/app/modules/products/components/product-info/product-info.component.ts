import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from '../../../../core/store/app.state';
import * as RouterActions from '../../../../core/store/router/router.actions';

import { Product } from '../../models/product.model';
import { AddProductToCart } from '../../../../core/store/cart/cart.actions';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  product: Product;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.product = this.route.snapshot.data['productData'];
  }

  buy(): void {
    this.addToCart();
    this.store.dispatch(new RouterActions.Go({
      path: ['/order']
    }));
  }

  addToCart(): void {
    this.store.dispatch(new AddProductToCart(this.product));
  }

  showFeedback(): void {
    this.store.dispatch(new RouterActions.Go({
      path: [{outlets: { feedback: ['feedback'] }}]
    }));
  }
}
