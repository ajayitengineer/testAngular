import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { MapviewComponent } from './mapview/mapview.component';
import { VehicleService } from './vehicle.service';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';



@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    MapviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'AIzaSyA2MZzFI6Z32E52Sj4fQYcAVHWmc4--g30'
    }),
    AgmDirectionModule,
  ],
  providers: [
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
