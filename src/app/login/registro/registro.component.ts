import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['../login.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme = false;

  constructor( ) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    this.recordarme = true;
  }
  
  onSubmit( form: NgForm ){

    if (form.invalid) { return; }
    console.log(this.usuario);
  
  }
  

}