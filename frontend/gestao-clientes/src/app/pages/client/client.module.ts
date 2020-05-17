import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { ClientRoutingModule } from './client.routing';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientCreateUpdateComponent } from './client-create-update/client-create-update.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    ClientListComponent,
    ClientCreateUpdateComponent,
    ClientDetailsComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatTableModule,
    // MatMenuModule,
    // MatIconModule,
    // MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule
  ]
})
export class ClientModule { }
