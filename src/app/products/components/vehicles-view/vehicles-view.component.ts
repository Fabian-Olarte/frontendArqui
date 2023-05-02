import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicles } from 'src/app/models/products/vehicles/vehicles';

@Component({
  selector: 'app-vehicles-view',
  templateUrl: './vehicles-view.component.html',
  styleUrls: ['./vehicles-view.component.sass']
})
export class VehiclesViewComponent implements OnInit {

  vehicle: Vehicles = new Vehicles(1, "automovil", "ford", "gris", "AAA000", 129372, "2000", "el mejor", "https://www.elcarrocolombiano.com/wp-content/uploads/2019/10/20191013-CHEVROLET-BLAZER-RS-PRUEBA-DE-MANEJO-01.jpg");;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getvehicleById();
    console.log(this.vehicle)
  }

  getvehicleById(): void {
    //const id = Number(this.route.snapshot.paramMap.get('id'));
    //llamado a servicio para obtener el vehiculo

  }


}
