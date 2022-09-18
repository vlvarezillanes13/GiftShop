import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';
import { Router } from '@angular/router';
import { IUsuario } from '../../interfaces/usuario.interface';
import { LocalStorageService } from '../../services/localStorage/local-storage.service';
import { USUARIOLOCALSTORAGE } from 'src/assets/constantes/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup = this.fb.group({
    username: [
      '', 
      [Validators.required,Validators.minLength(5), Validators.maxLength(20)]
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(20)],
    ],
  });

  public usuario: IUsuario;
  isOpen:boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private localStorageService:LocalStorageService
  ) {}

  ngOnInit() {
    this.localStorageService.limpiarInfo();
  }

  ingresar() {
    this.loginService
      .validarCredenciales(
        this.formularioLogin.value.username,
        this.formularioLogin.value.password
      )
      .subscribe((resp) => {
        this.usuario = resp;
        if (this.usuario) {
          this.localStorageService.guardarUsuario(USUARIOLOCALSTORAGE,this.usuario);
          this.formularioLogin.reset()
          this.router.navigate(['../inicio']);
        } else {
          this.isOpen = true;
        }
      });
  }

  closeModel(){
    this.isOpen = false;
  }
}
