import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Product } from '../models/product.model';
import { AppSettingsService } from '../../../core/services/app-settings.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly productsUrl = `${this.appSettingsService.getAppSettings().environment}products`;

  constructor(
    private http: HttpClient,
    private appSettingsService: AppSettingsService
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productsUrl}`);
  }

  getProduct(id: number | string): Observable<Product> {
    return this.http.get<Product>(`${this.productsUrl}/${id}`);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.productsUrl}/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.productsUrl}/${id}`);
  }
}
