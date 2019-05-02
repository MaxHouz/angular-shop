import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Order } from '../models/order.models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly ordersUrl = 'http://localhost:3001/orders';

  constructor(
    private http: HttpClient
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
