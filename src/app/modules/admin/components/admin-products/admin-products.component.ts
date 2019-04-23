import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { Observable } from 'rxjs';

import { Product } from '../../../products/models/product.model';
import { ProductsService } from '../../../products/services/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {

  productsList: Observable<Product[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.productsList = this.productsService.getProducts();
  }

  onEdit(product: Product): void {
    this.router.navigate(['./edit', product.id], { relativeTo: this.route });
  }

  onDelete(product: Product): void {
    this.productsService.deleteProduct(product.id);
  }
}
