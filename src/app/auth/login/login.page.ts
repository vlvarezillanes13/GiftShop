import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';
import { Router } from '@angular/router';
import { IUsuario } from '../../interfaces/usuario.interface';

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
    public fb: FormBuilder,
    public alertController: AlertController,
    public loginService: LoginService,
    public router: Router
  ) {}

  ngOnInit() {}

  ingresar() {
    this.loginService
      .validarCredenciales(
        this.formularioLogin.value.username,
        this.formularioLogin.value.password
      )
      .subscribe((resp) => {
        this.usuario = resp;
        if (this.usuario) {
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
