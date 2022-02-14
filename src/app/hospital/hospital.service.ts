import { Injectable } from '@angular/core';

@Injectable()
export class HospitalService{
  getHospitais(){
    return ['Unidade Hospitalar A', 'Unidade Hospitalar B'];
  }
}
