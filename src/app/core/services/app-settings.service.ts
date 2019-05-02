import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LocalStorageService } from './local-storage.service';

import { AppSettings } from '../models/app-setting.model';


@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  initializeSettings() {
    let appSettings;

    if (this.getSettingsFromLocalStorage() !== null) {
      appSettings = this.getSettingsFromLocalStorage();
    } else {
      this.getLocalSettings().subscribe(
        (settings) => {
          appSettings = settings;
          this.saveSettingToLocalStorage(settings);
        },
        () => appSettings = this.getDefaultSetting()
      );
    }
    return appSettings;
  }

  private getSettingsFromLocalStorage(): AppSettings {
    return JSON.parse(this.localStorageService.getItem('app-settings')) as AppSettings;
  }

  private saveSettingToLocalStorage(settings: AppSettings): void {
    this.localStorageService.setItem('app-settings', JSON.stringify(settings));
  }

  private getLocalSettings(): Observable<AppSettings> {
    return this.http.get<AppSettings>('./assets/app-settings.json');
  }

  private getDefaultSetting(): AppSettings {
    return {
      name: 'Angular Shop',
      version: '1.0.0',
      author: 'default',
      environment: 'default'
    };
  }
}
