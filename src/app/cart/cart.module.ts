import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CartButtonComponent } from './components/cart-button/cart-button.component';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';

@NgModule({
  declarations: [CartButtonComponent, CartModalComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [CartModalComponent],
  exports: [CartButtonComponent]
})
export class CartModule { }
