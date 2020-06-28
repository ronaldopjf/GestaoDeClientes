import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../../../shared/material-module';
import { NgxMaskModule } from 'ngx-mask';

import { ClientRoutingModule } from './client.routing';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientCreateUpdateComponent } from './client-create-update/client-create-update.component';
import { ClientService } from 'src/app/services/client.service';
import { OccupationService } from 'src/app/services/occupation.service';
import { PostalCodeService } from 'src/app/services/postal-code.service';
import { ConfirmDialogModule } from 'src/shared/confirm/confirm-dialog.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    ClientListComponent,
    ClientCreateUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoMaterialModule,
    ConfirmDialogModule,
    ClientRoutingModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    ClientService,
    OccupationService,
    PostalCodeService,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ]
})
export class ClientModule { }
