import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LocalStorageService } from './local-storage.service';

import { AppSettings } from '../models/app-setting.model';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  private appSettings: AppSettings;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  initializeSettings(): Promise<any> {
    if (!!this.getSettingsFromLocalStorage()) {
      return Promise.resolve(this.getSettingsFromLocalStorage())
        .then(settings => this.appSettings = settings);
    } else {
      return this.getLocalSettings()
        .then(settings => {
          this.appSettings = settings;
          this.saveSettingToLocalStorage(settings);
        })
        .catch(() => this.appSettings = this.getDefaultSetting());
    }
  }

  getAppSettings(): AppSettings {
    return this.appSettings;
  }

  private getSettingsFromLocalStorage(): AppSettings {
    return JSON.parse(this.localStorageService.getItem('app-settings')) as AppSettings;
  }

  private saveSettingToLocalStorage(settings: AppSettings): void {
    this.localStorageService.setItem('app-settings', JSON.stringify(settings));
  }

  private getLocalSettings(): Promise<AppSettings> {
    return this.http.get<AppSettings>('./assets/app-settings.json')
      .toPromise();
  }

  private getDefaultSetting(): AppSettings {
    return {
      title: 'Default title',
      version: '1.0.0',
      author: 'default',
      environment: 'http://localhost:3001/'
    };
  }
}
