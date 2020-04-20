import { RouterModule, Route, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProductoComponent } from './producto/producto.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { AgregarCategoriaComponent } from './agregar-categoria/agregar-categoria.component';
import { ProveedorComponent } from './proveedor/proveedor.component'
import { AgregarProveedorComponent } from './agregar-proveedor/agregar-proveedor.component'
import { VentaComponent } from './venta/venta.component';


const pagesRoutes: Routes = [
    {   path: '' , 
        component: PagesComponent,
        children: [
          { path: 'home' , component: HomeComponent },
          { path: 'producto' , component: ProductoComponent },
          { path: 'agregar-producto' , component: AgregarProductoComponent },
          { path: 'categoria' , component: CategoriaComponent },
          { path: 'agregar-categoria' , component: AgregarCategoriaComponent },
          { path: 'proveedor' , component: ProveedorComponent },
          { path: 'agregar-proveedor' , component: AgregarProveedorComponent },
          { path: 'venta' , component: VentaComponent },
          { path: '' , redirectTo: '/home', pathMatch: 'full' }
        ] 
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );