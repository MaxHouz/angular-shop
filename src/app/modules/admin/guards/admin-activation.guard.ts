import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AppSettingsService } from '../../../core/services/app-settings.service';

@Injectable({
  providedIn: 'root'
})
export class AdminActivationGuard implements CanActivate {
  constructor(
    private router: Router,
    private appSettingsService: AppSettingsService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.appSettingsService.getAppSettings().mode === 'admin') {
      return true;
    } else {
      this.router.navigate(['/']);
    }
    return false;
  }
}
