import { NgModule } from '@angular/core';

import { DemoMaterialModule } from 'src/shared/material-module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    ConfirmDialogComponent
  ],
  imports: [
    DemoMaterialModule
  ]
})
export class ConfirmDialogModule {
}
