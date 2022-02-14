import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { GetUsersComponent } from './get-users.component';

@NgModule({
  declarations: [
    GetUsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    GetUsersComponent
  ]
})
export class GetUsersModule { }
