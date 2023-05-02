import { Component, Input } from '@angular/core';
import { Spareparts } from 'src/app/models/products/spareparts/spareparts';
import { Vehicles } from 'src/app/models/products/vehicles/vehicles';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent {

  @Input()
  vehicle: Vehicles | undefined;
  @Input()
  sparepart: Spareparts | undefined;

}
