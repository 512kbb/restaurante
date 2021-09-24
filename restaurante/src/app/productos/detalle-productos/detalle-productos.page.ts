import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService} from '../productos.service';
import { Producto } from './producto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.page.html',
  styleUrls: ['./detalle-productos.page.scss'],
})

export class DetalleProductosPage implements OnInit {

  producto : Producto;

  //variable para capturar la URL activa
  constructor(private actRoute : ActivatedRoute, private pService : ProductosService, private router : Router) { }

  ngOnInit() {

    //buscar el producto por el id q viene en la url
    this.actRoute.paramMap.subscribe(
      paramMap => {
        //captura el id de la url
        const val = paramMap.get('prodID')
        console.log(val)

        this.producto = this.pService.getProductosById(val)
        console.log(this.producto)
      })


  }
   // método que se llamará desde la GUI
   eliminarProducto(){
    console.log("eliminado")
    this.pService.deleteProductos(this.producto.id)
    this.router.navigate(['/productos'])
  }


}
