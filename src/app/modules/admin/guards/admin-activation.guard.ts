import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CartService } from '../../../core/services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class AdminActivationGuard implements CanActivate {
  constructor(
    private cartService: CartService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.cartService.getCartLength() === 3;
  }
}
