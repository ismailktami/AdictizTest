import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSelectModule,
  MatOptionModule,
  MatTabsModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatGridListModule,
  FlexLayoutModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSelectModule,
  MatOptionModule,
  MatTabsModule,
MatCardModule]
@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class AdzMaterialModule { }
