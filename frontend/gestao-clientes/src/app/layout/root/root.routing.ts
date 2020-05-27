import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootComponent } from './root/root.component';

const routes: Routes = [
  {
    path: '', component: RootComponent, children:
      [
        { path: '', loadChildren: '../../pages/client/client.module#ClientModule' },
        { path: 'client', loadChildren: '../../pages/client/client.module#ClientModule' },
        { path: 'occupation', loadChildren: '../../pages/occupation/occupation.module#OccupationModule' }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
