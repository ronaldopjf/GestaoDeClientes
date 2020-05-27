import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../material-module';
import { RouterModule } from '@angular/router';

import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule
  ],
  exports: [TopBarComponent]
})
export class TopBarModule { }
