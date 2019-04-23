import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../../../core/services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderActivationGuard implements CanActivate {
  constructor(
    private router: Router,
    private cartService: CartService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.cartService.isCartEmpty()) {
      return true;
    } else {
      this.router.navigate(['/product-list']);
    }
    return false;
  }
}
