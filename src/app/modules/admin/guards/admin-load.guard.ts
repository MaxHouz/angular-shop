import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../../../core/services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class AdminLoadGuard implements CanLoad  {
  constructor(
    private router: Router,
    private cartService: CartService
  ) {}
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.cartService.getCartLength() === 3) {
      return true;
    } else {
      this.router.navigate(['/']);
    }
    return false;
  }
}
