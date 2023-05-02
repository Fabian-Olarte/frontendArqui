import { Component, OnInit } from '@angular/core';
import { Vehicles } from 'src/app/models/products/vehicles/vehicles';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.sass']
})

export class VehiclesComponent implements OnInit {

  vehiclesList: Vehicles[] = [];
  ngOnInit(): void {
    let vehicle1: Vehicles = new Vehicles(1, "automovil", "ford", "gris", "AAA000", 129372, "2000", "el mejor", "");
    let vehicle2: Vehicles = new Vehicles(1, "automovil", "ford", "gris", "AAA000", 129372, "2000", "el mejor", "");
    let vehicle3: Vehicles = new Vehicles(1, "automovil", "ford", "gris", "AAA000", 129372, "2000", "el mejor", "");

    this.vehiclesList?.push(vehicle1);
    this.vehiclesList?.push(vehicle2);
    this.vehiclesList?.push(vehicle3);
    console.log(this.vehiclesList);
  }





}
