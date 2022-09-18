import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CategoriasService } from '../../services/categorias/categorias.service';
import { ICategoria } from '../../interfaces/categoria.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
})
export class MenuLateralComponent implements OnInit {

  categorias: ICategoria[] = [];

  constructor(  private menu: MenuController,
                private categoriasService: CategoriasService,
                private router: Router) { }

  ngOnInit(){
    this.categoriasService.obtenerCategorias()
      .subscribe( (categorias) => this.categorias = categorias);
  }

  cerrarCategorias(){
    this.menu.close('first');
  }

  buscarPorCategoria( categoria: ICategoria){
    this.router.navigate(['../producto-por-categoria', categoria.id]);
  }

  irInicio(){
    this.router.navigate(['../inicio']);
  }

}
