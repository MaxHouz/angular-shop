import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CartButtonComponent } from './components/cart-button/cart-button.component';

@NgModule({
  declarations: [CartButtonComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [CartButtonComponent]
})
export class CartModule { }
