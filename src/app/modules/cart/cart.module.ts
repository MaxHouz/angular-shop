import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../core/material/material.module';
import { CartRoutingModule } from './cart-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { cartReducer } from '../../core/store/cart/cart.reducer';
import { CartEffects } from '../../core/store/cart/cart.effects';

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
    StoreModule.forFeature('cart', cartReducer),
    EffectsModule.forFeature([CartEffects]),
    CartRoutingModule
  ],
  entryComponents: [
    CartModalComponent
  ]
})
export class CartModule { }
