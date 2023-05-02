import { Component, OnInit } from '@angular/core';
import { Spareparts } from 'src/app/models/products/spareparts/spareparts';

@Component({
  selector: 'app-spareparts',
  templateUrl: './spareparts.component.html',
  styleUrls: ['./spareparts.component.sass']
})
export class SparepartsComponent implements OnInit {

  sparepartsList: Spareparts[] = [];
  ngOnInit(): void {
    let spare1: Spareparts = new Spareparts(1, "rodamiento", "el rodamiento", 1284732, 20000, 400);
    let spare2: Spareparts = new Spareparts(2, "rodamiento", "el rodamiento", 1284732, 20000, 400);
    let spare3: Spareparts = new Spareparts(3, "rodamiento", "el rodamiento", 1284732, 20000, 400);

    this.sparepartsList.push(spare1);
    this.sparepartsList.push(spare2);
    this.sparepartsList.push(spare3);
  }


}
