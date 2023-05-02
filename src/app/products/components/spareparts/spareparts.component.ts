import { Component, OnInit } from '@angular/core';
import { Sparepart } from 'src/app/models/product/sparepart/sparepart';

@Component({
  selector: 'app-spareparts',
  templateUrl: './spareparts.component.html',
  styleUrls: ['./spareparts.component.sass']
})
export class SparepartsComponent implements OnInit {

  sparepartsList: Sparepart[] = [];

  ngOnInit(): void {
    let spare1: Sparepart = new Sparepart(1, "Rodamientos", "el rodamiento", 128, 20000, 400, "https://www.serviasistenciaexpress.com/wp-content/uploads/2018/03/repuestos-originales-para-vehiculos-autos-motos.jpg");
    let spare2: Sparepart = new Sparepart(2, "Suspension", "el rodamiento", 12, 20000, 400, "https://www.semana.com/resizer/7OHB3VjEk3u5h0zRKZv9LISWft8=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/TGRSOEBYT5GJPAMX632CNF4ZAE.jpg");
    let spare3: Sparepart = new Sparepart(3, "Frenos", "el rodamiento", 50, 20000, 400, "https://s3.eu-west-1.amazonaws.com/cdn.motorbikemag.es/wp-content/uploads/2016/06/piezas-motor-380x285.jpg");
    let spare4: Sparepart = new Sparepart(3, "Aceite", "el rodamiento", 8, 20000, 400, "https://autoamerica.com.co/wp-content/uploads/2020/07/repuetos-imgprin-1024x887.jpg");

    this.sparepartsList.push(spare1);
    this.sparepartsList.push(spare2);
    this.sparepartsList.push(spare3);
    this.sparepartsList.push(spare4);
  }


}