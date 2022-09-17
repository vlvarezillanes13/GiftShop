import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CategoriasService } from '../../services/categorias/categorias.service';
import { ICategoria } from '../../interfaces/categoria.interface';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
})
export class MenuLateralComponent implements OnInit {

  categorias: ICategoria[] = [];

  constructor(  private menu: MenuController,
                private categoriasService: CategoriasService) { }

  ngOnInit(){
    this.categoriasService.obtenerCategorias()
      .subscribe( (categorias) => this.categorias = categorias);
  }

  cerrarCategorias(){
    this.menu.close('first');
  }

}
