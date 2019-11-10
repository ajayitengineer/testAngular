import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MapviewService } from '../mapview.service';
import { VehicleDataApi } from '../models/vehicle';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css']
})
export class MapviewComponent implements OnInit{

  constructor(private route: ActivatedRoute,private service: MapviewService) { }


mapData: {
  id: number,
  created_at: string,
  updated_at: string,
  longitiude: number,
  latitiude: number,
  vehicle_id: number,
}[];
total:number;
id:number;
isData = false;
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.route.params.subscribe((params: Params) => {
          this.id = params['id'];
    });
    this.fetchData(this.id);
    setInterval(() => {
      this.service.show(this.id) .subscribe(
        (data: VehicleDataApi) => {
          console.log(data);
          this.isData = true;
          this.mapData = data.payloads;
          this.total = data.payloads.length;
        },
        (error) => {
          console.log(error);
        }
      );
    },1000*300);

  }

fetchData(id){
  this.service.show(id) .subscribe(
    (data: VehicleDataApi) => {
      console.log(data);
      this.isData = true;
      this.mapData = data.payloads;
      this.total = data.payloads.length;

    },
    (error) => {
      console.log(error);
    }
  );
}
}

