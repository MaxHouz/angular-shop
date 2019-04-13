import {Component, Inject, OnInit, Optional} from '@angular/core';

import { ConstantsService } from '../../core/services/constants.service';
import { GeneratorService } from '../../core/services/generator.service';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { ConfigOptionsService } from '../../core/services/config-options.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  token: string;
  name: string;
  value: string;

  constructor(
    private localStorageService: LocalStorageService,
    private configOptionsService: ConfigOptionsService,
    @Inject(ConstantsService) public constantsService: Object,
    @Inject(GeneratorService) @Optional() private generatorService: string
  ) { }

  ngOnInit() {
    this.token = this.generatorService ? this.generatorService : 'Service to generate token is unavailable';
  }

  onSaveToLocalStorage(): void {
    if (this.name && this.value) {
      this.localStorageService.setItem(this.name, this.value);
    }
  }

  onRemoveFromLocalStorage(): void {
    if (this.name) {
      this.localStorageService.removeItem(this.name);
    }
  }

  onGetItemFromLocalStorage(): void {
    if (this.name) {
      alert(`Your value is: ${this.localStorageService.getItem(this.name)}`);
    }
  }

  onShowConfigOptions(): void {
    alert(JSON.stringify(this.configOptionsService.getConfigObject()));
  }

  onSetNewConfigObject(obj: Object): void {
    this.configOptionsService.setNewConfigObject(obj);
  }

  onModifyConfigObject(obj: Object): void {
    this.configOptionsService.modifyConfigObject(obj);
  }

  onSetConfigProperty(): void {
    if (this.name && this.value) {
      this.configOptionsService.setConfigProperty(this.name, this.value);
    }
  }
}
