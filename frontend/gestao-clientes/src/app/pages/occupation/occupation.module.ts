import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoMaterialModule } from 'src/shared/material-module';

import { OccupationRoutingModule } from './occupation.routing';
import { OccupationListComponent } from './occupation-list/occupation-list.component';
import { OccupationCreateUpdateComponent } from './occupation-create-update/occupation-create-update.component';
import { ConfirmDialogModule } from 'src/shared/confirm/confirm-dialog.module';
import { OccupationService } from 'src/app/services/occupation.service';

@NgModule({
  declarations: [
    OccupationListComponent,
    OccupationCreateUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoMaterialModule,
    ConfirmDialogModule,
    OccupationRoutingModule
  ],
  providers: [
    OccupationService
  ]
})
export class OccupationModule { }
