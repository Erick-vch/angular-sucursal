import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {codigo: "abc", nombre: "jperez", direccion: "Av. Lima", telefono: 123, estado: "ACTIVO"},
    {codigo: "def", nombre: "lmessi", direccion: "Av. Buenos Aires", telefono: 456, estado: "INACTIVO"},
    {codigo: "ghi", nombre: "kmbappe", direccion: "Av. Paris", telefono: 789, estado: "ACTIVO"}
  
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }
}
