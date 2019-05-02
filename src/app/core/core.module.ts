import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CONSTANTS, ConstantsService } from './services/constants.service';
import { GeneratorFactory, GeneratorService } from './services/generator.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  providers: [
    { provide: ConstantsService, useValue: CONSTANTS},
    { provide: GeneratorService, useFactory: GeneratorFactory(5)}
  ]
})
export class CoreModule { }
