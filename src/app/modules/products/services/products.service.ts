import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Categories } from '../models/categories.enum';

import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsList: Product[] = [
    new Product(
      1,
      'Asus Zenbook',
      1600,
      Categories.notebooks,
      'Ultra portable notebook',
      true
    ),
    new Product(
      2,
      'iPhone Xs',
      1200,
      Categories.phones,
      'Latest apple iPhone',
      true
    ),
    new Product(
      3,
      'Galaxy Buds',
      150,
      Categories.headphones,
      'Samsung wireless headphones',
      true
    ),
    new Product(
      4,
      'MacBook silicon case',
      200,
      Categories.accessories,
      'Silicon case for apple MacBook',
      true
    )
  ];
  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.productsList);
  }
}
