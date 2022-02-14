import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalComponent } from './hospital.component';

@NgModule({
  declarations: [
    HospitalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HospitalComponent
  ]
})
export class HospitalModule { }
