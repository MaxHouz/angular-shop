import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Categories } from '../models/categories.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsList: Product[] = [
    {
      id: 1,
      name: 'Asus Zenbook',
      price: 1600,
      category: Categories.notebooks,
      description: 'Ultra portable notebook',
      isAvailable: true
    },
    {
      id: 2,
      name: 'iPhone Xs',
      price: 1200,
      category: Categories.phones,
      description: 'Latest apple iPhone',
      isAvailable: false
    },
    {
      id: 3,
      name: 'Galaxy Buds',
      price: 150,
      category: Categories.headphones,
      description: 'Samsung wireless headphones',
      isAvailable: true
    },
    {
      id: 4,
      name: 'MacBook silicon case',
      price: 200,
      category: Categories.accessories,
      description: 'Silicon case for apple MacBook',
      isAvailable: false
    }
  ];
  constructor() { }

  getProducts(): Product[] {
    return this.productsList;
  }
}
