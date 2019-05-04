import {
  OnInit,
  ViewChild,
  Component,
  ElementRef,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';
import { Router } from '@angular/router';

import { AppSettingsService } from '../../../core/services/app-settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('appTitle') appTitle: ElementRef;

  constructor(
    private router: Router,
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
    this.router.navigate(['/']);
  }

  navigateToCart(): void {
    this.router.navigate(['/cart']);
  }

  navigateToAdmin(): void {
    this.router.navigate(['/admin']);
  }

  navigateToContacts(): void {
    this.router.navigate(['/contact-us']);
  }
  navigateToProductsList(): void {
    this.router.navigate(['/products-list']);
  }
}
