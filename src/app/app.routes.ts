import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './login/registro/registro.component';


const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro'   , component: RegistroComponent },
  { path: '**', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);