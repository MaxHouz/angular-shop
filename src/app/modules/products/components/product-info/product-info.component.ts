import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../models/product.model';
import { CartService } from '../../../../core/services/cart.service';

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
  ) { }

  ngOnInit() {
    this.product = this.route.snapshot.data['productData'];
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
