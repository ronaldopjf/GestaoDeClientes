import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from 'src/shared/material-module';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ClientModule } from './pages/client/client.module';
import { OccupationModule } from './pages/occupation/occupation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    DemoMaterialModule,
    ClientModule,
    OccupationModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
