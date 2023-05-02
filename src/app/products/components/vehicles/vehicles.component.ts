import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/product/vehicle/vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.sass']
})

export class VehiclesComponent implements OnInit {

  vehiclesList: Vehicle[] = [];

  ngOnInit(): void {
    let vehicle1: Vehicle = new Vehicle(1, "Nissan March", "Nissan", "ford", "gris", "AAA000", 12500000, "2015", "el mejor", "");
    let vehicle2: Vehicle = new Vehicle(1, "Ford Fiesta", "Ford", "ford", "gris", "AAA000", 20500000, "2022", "el mejor", "https://www.elcarrocolombiano.com/wp-content/uploads/2019/12/20191223-HISTORIA-DE-UNA-DECADA-2013-06.jpg");
    let vehicle3: Vehicle = new Vehicle(1, "Hyundai i25", "Hyundai", "ford", "gris", "AAA000", 35000000, "2008", "el mejor", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspTkOVgcFb3Fb3Pk7qp2h_Zh6uA_udJF6BA&usqp=CAU");

    this.vehiclesList?.push(vehicle1);
    this.vehiclesList?.push(vehicle2);
    this.vehiclesList?.push(vehicle3);
  }
}