import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { VehicleApi } from '../models/vehicle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicles: {
    id: number,
    name: string,
    created_at: string,
    updated_at: string
  }[];
  isData = false;
  constructor(private service: VehicleService,private router: Router) { }

  ngOnInit() {

     this.service.list().subscribe(
       (data: VehicleApi) => {
         console.log(data);
         this.isData = true;
         this.vehicles = data.payloads;
       },
       (error) => {
         console.log(error);
       }
     );
  }

  check(id) {
    this.router.navigate(['vehicle',id]);
  }


}
