import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UsuarioModel } from '../../../models/usuario.model';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  ngModel: UsuarioModel = new UsuarioModel();

  public formulario: FormGroup;

  @Input() set estarAtento(numero: number){
    if (numero != null) {
      if (numero == 1) {
        this.guardarUsuario();
      }
    }
  }

  @Output() mandarUsuarioAlPadre = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.formulario = new FormGroup({
      'nombre': new  FormControl(null, [Validators.required, Validators.maxLength(25)]),
      'apellido': new FormControl(null, [Validators.required, Validators.maxLength(25)]),
      'edad': new FormControl(null, [Validators.pattern("[0-9]+")]),
      'numeroDoc': new FormControl(null, [Validators.required, Validators.pattern("[0-9]+"), Validators.maxLength(13)]),
      'tipoDoc': new FormControl(null, [Validators.required]),
    })
  }

  isValid(input: string, error: string){
    return ((this.formulario.get(input).touched || 
            this.formulario.get(input).dirty) &&
            this.formulario.get(input).hasError(error));
  }

  guardarUsuario(){
    // console.log(this.ngModel);
    this.mandarUsuarioAlPadre.emit(this.ngModel);
    this.ngModel = new UsuarioModel();
  }

}

