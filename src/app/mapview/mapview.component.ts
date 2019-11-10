import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public lat = 24.799448;
public lng = 120.979021;
public latA = 27.560932;
public lngA = 76.625015;
public latB = 26.922070;
public lngB = 75.778885;
public latC = 28.027138;
public lngC = 73.302155;
public latD = 28.292290;
public lngD = 74.966583;
public latE = 28.457523;
public lngE = 77.026344;

mapData: {
  id: number,
  created_at: string,
  updated_at: string,
  longitiude: number,
  latitiude: number,
  vehicle_id: number,
}[];
total:number;

isData = false;
url = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
  ngOnInit() {
    let id:number = this.route.snapshot.params['id'];
    this.fetchData(id);
    setInterval(() => {
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

