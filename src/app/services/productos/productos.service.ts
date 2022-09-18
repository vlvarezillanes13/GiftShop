import { Injectable } from '@angular/core';
import { IProducto } from '../../interfaces/producto.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseUrl: string = 'http://localhost:8081/api/producto';

  constructor(  private http: HttpClient ) { }

  obtenerProductos(){
    const url: string = `${this.baseUrl}/getProductos`;
    return this.http.get<IProducto[]>( url);
  }
}
