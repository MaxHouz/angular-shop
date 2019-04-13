import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private config: Object = {
    id: 1,
    login: 'Maks',
    email: 'max.shatailo@gmail.com'
  };

  constructor() { }

  getConfigObject(): Object {
    return this.config;
  }

  setNewConfigObject(config: Object): void {
    this.config = { ...config };
  }

  modifyConfigObject(config: Object): void {
    this.config = { ...this.config, ...config };
  }

  setConfigProperty(name: string, value: any): void {
    this.modifyConfigObject({ [name]: value });
  }
}
