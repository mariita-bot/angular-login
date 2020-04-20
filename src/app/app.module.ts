import { NgModule } from '@angular/core';
//ROUTES
import { APP_ROUTING } from './app.routes';
//modules
import { PagesModule } from './pages/pages.module';
//componentes
import { RegistroComponent } from './login/registro/registro.component';
import { LoginComponent } from './login/login.component';
//componente principal
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
  ],
  imports: [
    APP_ROUTING,
    PagesModule,
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
