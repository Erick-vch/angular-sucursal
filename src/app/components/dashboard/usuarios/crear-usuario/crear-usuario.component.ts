import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
  estado: any[]=['ACTIVO','INACTIVO']

  form: FormGroup;

  constructor (private fb: FormBuilder, private _usuarioService: UsuarioService,
    private router: Router,
    private _snackBar: MatSnackBar
    ){
    this.form = this.fb.group({
      codigo  : ['', Validators.required],
      nombre  : ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      estado: ['', Validators.required],
    })
  }
 
  agregarUsuario(){
  
    //console.log(this.form);
    const user: Usuario = {
      codigo: this.form.value.codigo,
      nombre: this.form.value.nombre,
      direccion: this.form.value.direccion,
      telefono: this.form.value.telefono,
      estado: this.form.value.estado,
    }

    //console.log(user);

      this._usuarioService.agregarUsuario(user);
      this.router.navigate(['/dashboard/usuarios'])

      this._snackBar.open('El usuario fue agregado con exito', '',{
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
  }

}
