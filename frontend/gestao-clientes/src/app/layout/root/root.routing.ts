import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootComponent } from './root/root.component';

const clientModule = () => import('../../pages/client/client.module').then(x => x.ClientModule);
const occupationModule = () => import('../../pages/occupation/occupation.module').then(x => x.OccupationModule);

const routes: Routes = [
  {
    path: '', component: RootComponent, children:
      [
        { path: '', loadChildren: clientModule },
        { path: 'client', loadChildren: clientModule },
        { path: 'occupation', loadChildren: occupationModule }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
