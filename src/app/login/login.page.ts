import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../services/home-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(20)],
    ],
  });

  public usuario;

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    public homeService: HomeServiceService,
    public router: Router
  ) {}

  ngOnInit() {}

  ingresar() {
    this.homeService
      .validarCredenciales(
        this.formularioLogin.value.username,
        this.formularioLogin.value.password
      )
      .subscribe((resp) => {
        this.usuario = resp;

        if (this.usuario) {
          this.router.navigate(['../inicio']);
        } else {
          this.presentAlert();
        }
      });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'ERROR',
      subHeader: 'Credenciales Incorrectas',
      message: 'Vuelta a intertarlo',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
