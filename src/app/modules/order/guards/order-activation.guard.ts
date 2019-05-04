import {Injectable, OnDestroy} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../core/store/app.state';
import { CartState } from '../../../core/store/cart/cart.state';

@Injectable({
  providedIn: 'root'
})
export class OrderActivationGuard implements CanActivate, OnDestroy {
  private cartEmpty: boolean;
  private sub: Subscription;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    this.sub = this.store.pipe(select('cart'))
      .subscribe( (cartState: CartState) => this.cartEmpty = cartState.empty);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.cartEmpty) {
      return true;
    } else {
      this.router.navigate(['/products-list']);
    }
    return false;
  }
}
