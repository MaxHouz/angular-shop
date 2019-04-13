import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../core/material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { CartButtonComponent } from './components/cart-button/cart-button.component';
import { CartItemHoverDirective } from './directives/cart-item-hover.directive';
import { ContactUsFontDirective } from './directives/contact-us-font.directive';

const shared = [
  HeaderComponent,
  CartButtonComponent,
  ContactUsFontDirective,
  CartItemHoverDirective
];

@NgModule({
  declarations: [
    ...shared,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ...shared
  ]
})
export class SharedModule { }
