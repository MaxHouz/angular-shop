import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

import { Observable } from 'rxjs';
import { AppSettingsService } from '../../../core/services/app-settings.service';

import { Store } from '@ngrx/store';
import { AppState } from '../../../core/store/app.state';
import * as RouterActions from '../../../core/store/router/router.actions';

@Injectable({
  providedIn: 'root'
})
export class AdminLoadGuard implements CanLoad  {
  constructor(
    private store: Store<AppState>,
    private appSettingsService: AppSettingsService
  ) {}
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
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
