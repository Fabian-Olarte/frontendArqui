import { Component, Input } from '@angular/core';
import { Sparepart } from 'src/app/models/product/sparepart/sparepart';
import { Vehicle } from 'src/app/models/product/vehicle/vehicle';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})

export class ProductCardComponent {

  @Input()
  vehicle: Vehicle | undefined;
  @Input()
  sparepart: Sparepart | undefined;

}