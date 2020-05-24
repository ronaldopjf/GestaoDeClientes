import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../../../shared/material-module';

import { ClientRoutingModule } from './client.routing';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientCreateUpdateComponent } from './client-create-update/client-create-update.component';
import { ClientService } from 'src/app/services/client.service';
import { OccupationService } from 'src/app/services/occupation.service';
import { PostalCodeService } from 'src/app/services/postal-code.service';
import { ConfirmDialogModule } from 'src/shared/confirm/confirm-dialog.module';

@NgModule({
  declarations: [
    ClientListComponent,
    ClientCreateUpdateComponent,
    ClientDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoMaterialModule,
    ConfirmDialogModule,
    ClientRoutingModule
  ],
  providers: [
    ClientService,
    OccupationService,
    PostalCodeService
  ]
})
export class ClientModule { }
