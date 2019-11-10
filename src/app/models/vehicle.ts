export class Vehicle {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}


export class VehicleApi {
  message: string;
  payloads: Vehicle[];
}


export class VehicleData {
  id: number;
  created_at: string;
  updated_at: string;
  longitiude: number;
  latitiude: number;
  vehicle_id: number;

}

export class VehicleDataApi {
  message: string;
  payloads : VehicleData[];
}
