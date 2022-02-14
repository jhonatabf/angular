import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import {HospObject} from '../models/hospital.model';
import {rotasApi} from '../../../assets/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class GetHospitalService {

  rotas = new rotasApi
  hospitalApiUrl = this.rotas.getHospital;

  httOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public listHospital(): Observable<HospObject>{
    return this.http.get<HospObject>(this.hospitalApiUrl);
  }
}
