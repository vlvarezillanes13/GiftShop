import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategoria } from 'src/app/interfaces/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private baseUrl: string = 'http://localhost:8081/api/categoria';

  constructor( private http: HttpClient  ) { }

  obtenerCategorias(){
    const url: string = `${this.baseUrl}/getCategorias`;
    return this.http.get<ICategoria[]>( url);
  }

}
