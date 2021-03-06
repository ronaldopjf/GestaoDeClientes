import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const loginModule = () => import('./layout/login/login.module').then(x => x.LoginModule);
const rootModule = () => import('./layout/root/root.module').then(x => x.RootModule);

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: loginModule },
  { path: 'root', loadChildren: rootModule, canActivate: [AuthGuard] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }