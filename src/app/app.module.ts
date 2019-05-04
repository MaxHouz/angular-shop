import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { CartModule } from './modules/cart/cart.module';
import { OrderModule } from './modules/order/order.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './modules/products/products.module';
import { AppRoutingModule } from './app-routing.module';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { TimingInterceptor } from './core/interceptors/timing.interceptor';
import { AppSettingsService } from './core/services/app-settings.service';



@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    CartModule,
    OrderModule,
    ProductsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (settings: AppSettingsService) => () => settings.initializeSettings(),
      deps: [AppSettingsService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
