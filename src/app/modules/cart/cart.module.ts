import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../core/material/material.module';

import { CartModalComponent } from './components/cart-modal/cart-modal.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    CartModalComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  entryComponents: [CartModalComponent]
})
export class CartModule { }
