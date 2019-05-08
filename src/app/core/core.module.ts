import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreStoreModule } from './store/core-store.module';
import { CONSTANTS, ConstantsService } from './services/constants.service';
import { GeneratorFactory, GeneratorService } from './services/generator.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreStoreModule
  ],
  providers: [
    { provide: ConstantsService, useValue: CONSTANTS},
    { provide: GeneratorService, useFactory: GeneratorFactory(5)}
  ]
})
export class CoreModule { }
