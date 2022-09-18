import { Component, Input, OnInit } from '@angular/core';
import { IProducto } from '../../interfaces/producto.interface';
import { ICategoria } from '../../interfaces/categoria.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {

  @Input() productos:IProducto[];
  @Input() categoria:ICategoria;

  constructor() { }

  ngOnInit() {}

}
