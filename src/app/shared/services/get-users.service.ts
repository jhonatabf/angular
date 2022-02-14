import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import {UserObject} from '../models/usuarios.model';
import {rotasApi} from '../../../assets/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  rotas = new rotasApi
  userApiUrl = this.rotas.getUser;

  httOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public listUsers(name: string, hospital: string): Observable<UserObject>{
    return this.http.get<UserObject>(this.userApiUrl+'?name='+name+'&hospital='+hospital);
  }
}
