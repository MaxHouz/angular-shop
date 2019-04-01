import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../core/material/material.module';
import { CartButtonComponent } from './components/cart-button/cart-button.component';
import { CartModalComponent } from './components/cart-modal/cart-modal.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    CartButtonComponent,
    CartModalComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [CartModalComponent],
  exports: [CartButtonComponent]
})
export class CartModule { }
