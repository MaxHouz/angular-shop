import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../core/material/material.module';
import { CartRoutingModule } from './cart-routing.module';

import { CartModalComponent } from './components/cart-modal/cart-modal.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    CartModalComponent,
    CartItemComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    CartRoutingModule
  ],
  entryComponents: [
    CartModalComponent
  ]
})
export class CartModule { }
