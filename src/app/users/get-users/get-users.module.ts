import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { GetUsersComponent } from './get-users.component';

@NgModule({
  declarations: [
    GetUsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  exports: [
    GetUsersComponent
  ]
})
export class GetUsersModule { }
