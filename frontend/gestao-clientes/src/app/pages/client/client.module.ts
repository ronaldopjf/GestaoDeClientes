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
    ClientRoutingModule
  ],
  providers: [
    ClientService,
    OccupationService
  ]
})
export class ClientModule { }
