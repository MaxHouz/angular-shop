import {
  OnInit,
  ViewChild,
  Component,
  ElementRef,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../../core/store/app.state';
import * as RouterActions from '../../../core/store/router/router.actions';

import { AppSettingsService } from '../../../core/services/app-settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('appTitle') appTitle: ElementRef;

  constructor(
    private store: Store<AppState>,
    private appSettingsService: AppSettingsService
  ) {}

  ngOnInit() {
    console.log('ngOnInit: ' + this.appTitle.nativeElement.innerHTML);
  }

  ngAfterViewInit() {
    this.appTitle.nativeElement.innerHTML = this.appSettingsService.getAppSettings().title;
  }

  ngAfterViewChecked() {
    console.log('After viewChecked: ' + this.appTitle.nativeElement.innerHTML);
  }

  navigateHome(): void {
    this.store.dispatch(new RouterActions.Go({
      path: ['/']
    }));
  }

  navigateToCart(): void {
    this.store.dispatch(new RouterActions.Go({
      path: ['/cart']
    }));
  }

  navigateToAdmin(): void {
    this.store.dispatch(new RouterActions.Go({
      path: ['/admin']
    }));
  }

  navigateToContacts(): void {
    this.store.dispatch(new RouterActions.Go({
      path: ['/contact-us']
    }));
  }
  navigateToProductsList(): void {
    this.store.dispatch(new RouterActions.Go({
      path: ['/products-list']
    }));
  }
}
