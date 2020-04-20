import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UsuarioModel } from '../models/usuario.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel; 
  recordarme = false;

  constructor( ) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    this.recordarme = true;

  }

  login( form: NgForm ){
    if ( form.invalid ) { return; }
    console.log(this.usuario);

  }

}