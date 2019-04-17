import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBottomSheetModule } from '@angular/material';

const materialsModules = [
  MatListModule,
  MatCardModule,
  MatIconModule,
  MatBadgeModule,
  MatButtonModule,
  MatSelectModule,
  MatToolbarModule,
  MatDividerModule,
  MatCheckboxModule,
  MatBottomSheetModule
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
