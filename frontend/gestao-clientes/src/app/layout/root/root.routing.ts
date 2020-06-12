import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootComponent } from './root/root.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const clientModule = () => import('../../pages/client/client.module').then(x => x.ClientModule);
const occupationModule = () => import('../../pages/occupation/occupation.module').then(x => x.OccupationModule);

const routes: Routes = [
  {
    path: '', component: RootComponent, children:
      [
        { path: '', loadChildren: clientModule },
        { path: 'client', loadChildren: clientModule, canActivate: [AuthGuard] },
        { path: 'occupation', loadChildren: occupationModule, canActivate: [AuthGuard] }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
