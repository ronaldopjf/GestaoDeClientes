import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootComponent } from './root/root.component';
import { RootRoutingModule } from './root.routing';
import { ClientModule } from 'src/app/pages/client/client.module';
import { OccupationModule } from 'src/app/pages/occupation/occupation.module';
import { TopBarModule } from 'src/shared/top-bar/top-bar.module';
import { SideNavModule } from 'src/shared/side-nav/side-nav.module';
import { FooterModule } from 'src/shared/footer/footer.module';

@NgModule({
  declarations: [RootComponent],
  imports: [
    CommonModule,
    RootRoutingModule,
    ClientModule,
    OccupationModule,
    TopBarModule,
    SideNavModule,
    FooterModule
  ]
})
export class RootModule { }
