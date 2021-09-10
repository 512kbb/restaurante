import { Injectable } from '@angular/core';

import { ProductosPage } from './productos.page';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  private productos = [
    {
      id : '1',
      titulo : 'Hamburguesa',
      imgURL : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rebel-whopper-hamburguesa-vegetal-burger-king-1573567706.jpg',
      comentarios : ['que rica', 'ayyyyy lmao']
  },
    {
      id : '2',
      titulo : 'Barros Luco',
      imgURL : 'https://assets.adnradio.cl/2020/06/572bb4a1676e3795b24cbd2e713994b1-e1591732712152.jpg',
      comentarios : ['quesito', 'ayyyyy lmao']
  },
    {
      id : '3',
      titulo : 'Pepsi',
      imgURL : 'https://i1.wp.com/www.mrchef.cl/wp-content/uploads/2021/02/Pepsi_350.png?fit=800%2C800&ssl=1',
      comentarios : ['que rica cola', 'ayyyyy lmao']
  }
]

  constructor() {}

  getProductos () {

    //formato return de lista
    return [...this.productos]
    
  }

  getProductosById(productoId : string) {

    return {
    ...this.productos.find( serv => {
        return serv.id === productoId
     })   
  }
  }

  addProductos(titulo : string, imgURL : string) {

    this.productos.push(
      {
        id : String[this.productos.length + 1],
        titulo : titulo,
        imgURL : imgURL,
        comentarios : []
        
    }
    )
  }

  deleteProductos (productoId : string) {
    
    this.productos = this.productos.filter( serv => {
                      return serv.id !== productoId
                      
    })
  }
}
