import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService} from '../productos.service';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.page.html',
  styleUrls: ['./detalle-productos.page.scss'],
})
export class DetalleProductosPage implements OnInit {

  datos = {}
  //variable para capturar la URL activa
  constructor(private actRoute : ActivatedRoute, private pService : ProductosService) { }

  ngOnInit() {

    //buscar el producto por el id q viene en la url
    this.actRoute.paramMap.subscribe(
      paramMap => {
        //captura el id de la url
        const val = paramMap.get('prodID')
        console.log(val)

        this.datos = this.pService.getProductosById(val)
        console.log(this.datos)
      }
    )


  }

}
