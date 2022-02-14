import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalModule } from './hospital/hospital.module';
import { GetUsersModule } from './users/get-users/get-users.module';
import { HospitalService } from './hospital/hospital.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HospitalModule,
    GetUsersModule
  ],
  providers: [HospitalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
