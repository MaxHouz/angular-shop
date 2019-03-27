import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';

const materialsModules = [
  MatCardModule,
  MatDividerModule,
  MatToolbarModule,
  MatButtonModule,
  MatBadgeModule,
  MatIconModule,
  MatBottomSheetModule,
  MatListModule
];

@NgModule({
  imports: [
    ...materialsModules
  ],
  exports: [
    ...materialsModules
  ]
})
export class MaterialModule {}
