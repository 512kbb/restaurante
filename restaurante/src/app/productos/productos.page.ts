import { Component, OnInit } from '@angular/core';
import { ProductosService } from './productos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  private productos = []

  constructor(private servicioProductos : ProductosService, private router : Router) { 
    
  }

  ngOnInit() {
    this.productos = this.servicioProductos.getProductos();
  }

  ionViewWillEnter(){
    this.productos = this.servicioProductos.getProductos();
  }

  redirectAdd() {
    console.log('UWU')
    this.router.navigate(['productos/agregar-producto']);
  }
}
