import { Component, OnInit, ViewChild } from '@angular/core';

import { UsuarioModel } from '../../models/usuario.model';
import { RegistrarComponent } from './registrar/registrar.component';
import { ListarComponent } from './listar/listar.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  // this.ngModel = UsuarioModel consulta
  //                             antecedentes
  //                             usuario

  usuario: UsuarioModel = new UsuarioModel();
  guardador: number = 0; //si es 1 -> guardar; si es dos -> editar ; 0 -> nada

  @ViewChild(RegistrarComponent) claseHijaRegistrar : RegistrarComponent;
  // @ViewChild(ListarComponent) ListarComponent : ListarComponent;
  
  constructor() { }

  ngOnInit() {

  }

  guardarUsuario(){
    this.guardador = 1;
  }
  
  recibirUsuarioDelHijo(datos){
    console.log(datos);
    this.usuario = datos;
    

    // this._usuario.registrarusuario(datos).subscribe({
    //   result => {
    //     this.listarUsuarios();

    //   },
    //   error => {

    //   }
    // })
  }

  recibirUsuarioDelHijoListar(usuario){
    this.guardador = 2;
    this.claseHijaRegistrar.ngModel = usuario;
    console.log(this.claseHijaRegistrar);
  }

  // listarUsuarios(){

  //   this._usuario.listarUsuario(id).subscribe{
  //     result => {
  //       this.usuario = result;
  //     }
  //   }
  // }


}
