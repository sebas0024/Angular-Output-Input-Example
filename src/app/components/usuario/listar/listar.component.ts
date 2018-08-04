import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioModel } from '../../../models/usuario.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios : Array<UsuarioModel> = [];

  @Input() set recibirUsuarioDelPadre(usuario: UsuarioModel){
    console.log();
    if (usuario != null && usuario.nombre != "") {
      this.usuarios.push(usuario);
      console.log(usuario);
    }
  }

  @Output() devolderleUsuarioAlPadre = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  verUsuario(index){
    this.devolderleUsuarioAlPadre.emit(this.usuarios[index]);
  }

}
