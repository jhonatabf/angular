import { Component, OnInit } from '@angular/core';

import { HospitalService } from './hospital.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  tituloSelectHospital: string;
  optionSelectHospital: string[] = [];
  getHospitalService: HospitalService;

  constructor(_getHospitalService: HospitalService) {
      this.tituloSelectHospital = 'Selecione a instituição';
      this.getHospitalService = _getHospitalService;
   }

  ngOnInit(): void {
    this.optionSelectHospital = this.getHospitalService.getHospitais();
  }

}
