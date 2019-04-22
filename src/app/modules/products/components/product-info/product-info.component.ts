import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { Product } from '../../models/product.model';
import { CartService } from '../../../../core/services/cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: Params) => this.productsService.getProduct(+params.get('id')))
    ).subscribe(
      product => this.product = product
    );
  }

  buy(): void {
    this.addToCart();
    this.router.navigate(['/order']);
  }

  addToCart(): void {
    this.cartService.addProduct(this.product);
  }

  showFeedback(): void {
    this.router.navigate([{outlets: { feedback: ['feedback'] }}]);
  }
}
