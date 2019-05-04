import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Order } from '../models/order.models';

import { AppSettingsService } from '../../../core/services/app-settings.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly ordersUrl = `${this.appSettingsService.getAppSettings().environment}orders`;

  constructor(
    private http: HttpClient,
    private appSettingsService: AppSettingsService
  ) { }

  getOrders(): Promise<Order[]> {
    return this.http.get<Order[]>(`${this.ordersUrl}`)
      .toPromise()
      .then(response => <Order[]>response)
      .catch(this.handleError);
  }

  addOrder(order: Order): Promise<Order> {
    return this.http.post<Order[]>(`${this.ordersUrl}`, order)
      .toPromise()
      .then(response => <Order[]>response)
      .catch(this.handleError);
  }

  deleteOrder(id: number): Promise<Order> {
    return this.http.delete<Order[]>(`${this.ordersUrl}/${id}`)
      .toPromise()
      .then(response => <Order[]>response)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
