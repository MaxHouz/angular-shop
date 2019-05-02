import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { CartService } from '../../../core/services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class AdminActivationGuard implements CanActivate {
  constructor(
    private router: Router,
    private cartService: CartService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.cartService.getCartLength() === 3) {
      return true;
    } else {
      this.router.navigate(['/']);
    }
    return false;
  }
}
