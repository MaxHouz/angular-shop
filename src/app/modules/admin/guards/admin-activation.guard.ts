import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from '../../../core/store/app.state';
import * as RouterActions from '../../../core/store/router/router.actions';

import { AppSettingsService } from '../../../core/services/app-settings.service';

@Injectable({
  providedIn: 'root'
})
export class AdminActivationGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private appSettingsService: AppSettingsService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.appSettingsService.getAppSettings().mode === 'admin') {
      return true;
    } else {
      this.store.dispatch(new RouterActions.Go({
        path: ['/']
      }));
    }
    return false;
  }
}
