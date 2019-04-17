import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONSTANTS, ConstantsService } from './services/constants.service';
import { GeneratorFactory, GeneratorService } from './services/generator.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: ConstantsService, useValue: CONSTANTS},
    { provide: GeneratorService, useFactory: GeneratorFactory(5)}
  ]
})
export class CoreModule { }
