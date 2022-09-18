import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { IProducto } from '../../interfaces/producto.interface';
import { ICategoria } from '../../interfaces/categoria.interface';
import { CategoriasService } from '../../services/categorias/categorias.service';

@Component({
  selector: 'app-producto-por-categoria',
  templateUrl: './producto-por-categoria.page.html',
  styleUrls: ['./producto-por-categoria.page.scss'],
})
export class ProductoPorCategoriaPage implements OnInit {

  idCategoria: string;
  productos: IProducto[] = [];
  categoria: ICategoria;

  constructor(  private productosService: ProductosService,
                private categoriasSevice: CategoriasService,
                private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.idCategoria = this.activeRouter.snapshot.paramMap.get('id');
    console.log(this.idCategoria);
    this.obtenerCategoria();
    console.log(this.categoria);
    this.cargarProductos();
  }

  cargarProductos(){
    this.productosService.obtenerProductosPorCategoria( this.idCategoria )
      .subscribe( (productos) => this.productos = productos);
  }

  obtenerCategoria(){
    this.categoriasSevice.obtenerCategoria( this.idCategoria )
      .subscribe( cat => this.categoria = cat);
  }

}
