import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from 'src/shared/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RegisterComponent } from './register/register.component';
import { RegisterRoutingModule } from './register.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OccupationService } from 'src/app/services/occupation.service';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    RegisterRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [OccupationService]
})
export class RegisterModule { }
