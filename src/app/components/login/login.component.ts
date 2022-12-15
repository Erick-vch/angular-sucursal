import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  loading=false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router){
    this.form= this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]

    })
  }

  ngOnInit(): void{

  }

ingresar() {
  //console.log(this.form);
  const usuario = this.form.value.usuario;
  const password = this.form.value.password;

  //console.log(usuario);
  //console.log(password);

  if(usuario=='jperez'&&password=='admin123'){
    //redireccionamos al dashboard
    this.fakeloading();
  }else{
    //mostramos un mensaje de error
    this.error();
    this.form.reset();
  }
}

error(){

  this._snackBar.open('Usuario o contraseña invalido', '',{
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
  })
}

fakeloading(){
  this.loading = true;
  setTimeout(() => {
    //reedireccionamos al dash
    //this.loading = false;
    this.router.navigate(['dashboard']);
  }, 1500);
}

}


