import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    children : [
      {
        path : "",
        loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
      },
      {
        path : ":prodID",
        loadChildren: () => import('./productos/detalle-productos/detalle-productos.module').then( m => m.DetalleProductosPageModule)
      },
      {
        path  : 'agregar-producto',
        loadChildren: () => import('./productos/agregar-producto/agregar-producto.module').then(m => m.AgregarProductoPageModule)
      }
    ]
    // loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
