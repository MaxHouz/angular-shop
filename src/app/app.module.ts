import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { CartModule } from './modules/cart/cart.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './modules/products/products.module';
import { AppRoutingModule } from './app-routing.module';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    CartModule,
    ProductsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
