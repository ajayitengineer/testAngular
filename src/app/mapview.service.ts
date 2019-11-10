import { Injectable } from '@angular/core';
import { url } from './models/configuration';
import { HttpClient } from '@angular/common/http';
import { VehicleDataApi } from './models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class MapviewService {

  constructor(private http: HttpClient) { }

  show(id: number){
   return this.http.get<VehicleDataApi>(url+'/location/'+id);
  }
}
