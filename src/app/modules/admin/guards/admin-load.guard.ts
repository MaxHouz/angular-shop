import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppSettingsService } from '../../../core/services/app-settings.service';

@Injectable({
  providedIn: 'root'
})
export class AdminLoadGuard implements CanLoad  {
  constructor(
    private router: Router,
    private appSettingsService: AppSettingsService
  ) {}
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.appSettingsService.getAppSettings().mode === 'admin') {
      return true;
    } else {
      this.router.navigate(['/']);
    }
    return false;
  }
}
