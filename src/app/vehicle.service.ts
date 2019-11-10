import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from './models/configuration';
import { VehicleApi } from './models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

   apiurl = url;
  constructor(private http: HttpClient) { }


  list(){
    return this.http.get<VehicleApi>(this.apiurl+'/vehicles');
  }
}
