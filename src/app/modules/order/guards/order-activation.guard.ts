import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { AppState } from '../../../core/store/app.state';
import { getCartEmpty } from '../../../core/store/cart/cart.selectors';
import * as RouterActions from '../../../core/store/router/router.actions';

@Injectable({
  providedIn: 'root'
})
export class OrderActivationGuard implements CanActivate, OnDestroy {
  private cartEmpty: boolean;
  private sub: Subscription;

  constructor(
    private store: Store<AppState>
  ) {
    this.sub = this.store.pipe(select(getCartEmpty))
      .subscribe((cartEmpty: boolean) => this.cartEmpty = cartEmpty);
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
      this.store.dispatch(new RouterActions.Go({
        path: ['/products-list']
      }));
    }
    return false;
  }
}
