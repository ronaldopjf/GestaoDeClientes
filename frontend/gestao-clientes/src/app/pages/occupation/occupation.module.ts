import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OccupationRoutingModule } from './occupation.routing';
import { OccupationListComponent } from './occupation-list/occupation-list.component';
import { OccupationDetailsComponent } from './occupation-details/occupation-details.component';
import { OccupationCreateUpdateComponent } from './occupation-create-update/occupation-create-update.component';

@NgModule({
  declarations: [
    OccupationListComponent,
    OccupationDetailsComponent,
    OccupationCreateUpdateComponent
  ],
  imports: [
    CommonModule,
    OccupationRoutingModule
  ],
  providers: [
  ]
})
export class OccupationModule { }
