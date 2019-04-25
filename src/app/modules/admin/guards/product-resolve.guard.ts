import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Product } from '../../products/models/product.model';
import { Observable } from 'rxjs';

import { ProductsService } from '../../products/services/products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveGuard implements Resolve<Product> {
  constructor(
    private productsService: ProductsService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Product> | Promise<Product> | Product {
    return this.productsService.getProduct(+route.params['id']);
  }
}
