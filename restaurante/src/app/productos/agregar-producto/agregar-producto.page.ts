import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  constructor(private productoServicio : ProductosService, private router : Router) { }

  ngOnInit() {
  }
  
  addProduct(titulo, url, comentarios) {
    this.productoServicio.addProductos(titulo, url, comentarios);
    this.router.navigate(['/productos'])
  }
}
