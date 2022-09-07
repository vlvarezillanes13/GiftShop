import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup = this.fb.group({
    "username": ['', [Validators.required]],
    "password": ['', [Validators.required, Validators.minLength(5),Validators.maxLength(20)]]

  });

  constructor(  public fb: FormBuilder,
                public alertController: AlertController) { }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'))

    if(usuario.correo == f.correo && usuario.password == f.password){
      console.log('Ingresado')    
    }else{      const alert = await this.alertController.create({
      header: 'Datos incorrectos',
      message: 'Datos ingresados incorrectos',
      buttons: ['Aceptar']
    });

    await alert.present();
      

    }
  
    }


}
