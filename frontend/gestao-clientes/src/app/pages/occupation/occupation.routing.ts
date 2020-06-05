import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OccupationListComponent } from './occupation-list/occupation-list.component';
import { OccupationCreateUpdateComponent } from './occupation-create-update/occupation-create-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'occupation-list', pathMatch: 'full' },
  { path: 'occupation-list', component: OccupationListComponent },
  { path: 'occupation-create-update', component: OccupationCreateUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OccupationRoutingModule { }
