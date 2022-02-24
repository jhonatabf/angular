import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  public listUsers(name: string, hospital: string): Observable<any>{
    return this.http.get<any>(this.userApiUrl+'/'+hospital+'?name='+name);
  }
}
