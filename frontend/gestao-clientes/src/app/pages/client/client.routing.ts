import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientListComponent } from './client-list/client-list.component';
import { ClientCreateUpdateComponent } from './client-create-update/client-create-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'client-list', pathMatch: 'full' },
  { path: 'client-list', component: ClientListComponent },
  { path: 'client-create-update', component: ClientCreateUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
