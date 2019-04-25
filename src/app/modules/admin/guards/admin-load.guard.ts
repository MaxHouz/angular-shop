import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../../../core/services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class AdminLoadGuard implements CanLoad  {
  constructor(
    private cartService: CartService
  ) {}
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this.cartService.getCartLength() === 3;
  }
}
