import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { USUARIOLOCALSTORAGE } from 'src/assets/constantes/usuario';
import { IUsuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  usuario:IUsuario;
  openMenu:boolean = false;

  constructor(  private router: Router,
                private localStorageService:LocalStorageService,
                private menu: MenuController  ) { }

  ngOnInit() {
    this.usuario = this.localStorageService.obtenerUsuario( USUARIOLOCALSTORAGE);
  }

  toLogin(){
    this.router.navigate(['../login']);
  }

  abrirCategorias(){
    this.menu.enable(true, 'first');
    this.menu.open('first');
    this.openMenu=true;
  }
}
