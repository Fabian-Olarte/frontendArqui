import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.sass']
})

export class VehiclesComponent {


  vehiclesList: string[] = ['1', '2', '3']
}
