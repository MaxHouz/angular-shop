import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule
  ],
  exports: [
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule
  ]
})
export class MaterialModule { }
