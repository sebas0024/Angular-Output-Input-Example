import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { RegistrarComponent } from './components/usuario/registrar/registrar.component';
import { ListarComponent } from './components/usuario/listar/listar.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    RegistrarComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
