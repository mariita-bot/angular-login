import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Rutas
import { PAGES_ROUTES } from './pages.routes';
//components
import { HomeComponent } from './home/home.component';
import { AgregarProductoComponent} from './agregar-producto/agregar-producto.component'
import { ProductoComponent } from './producto/producto.component';
import { PagesComponent } from './pages.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { AgregarCategoriaComponent } from './agregar-categoria/agregar-categoria.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { AgregarProveedorComponent } from './agregar-proveedor/agregar-proveedor.component';
import { VentaComponent } from './venta/venta.component';
import { MesaComponent } from './mesa/mesa.component';


@NgModule({
    declarations: [
        HomeComponent,
        AgregarProductoComponent,
        ProductoComponent,
        PagesComponent,
        CategoriaComponent,
        AgregarCategoriaComponent,
        ProveedorComponent,
        AgregarProveedorComponent,
        VentaComponent,
        MesaComponent,
    ],
    exports:[
        BrowserModule,
        FormsModule,
        HomeComponent,
        AgregarProductoComponent,
        ProductoComponent,
        PagesComponent,
    ],
    imports: [
        PAGES_ROUTES
    ]


})

export class PagesModule{}