import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = 'http://localhost:8081/api/usuario';

  constructor( private http: HttpClient ) { }

  validarCredenciales( username: string, password: string){

    const body = {
      'username': username,
      'password': password
    }
    const url: string = `${this.baseUrl}/validarUsuario`;
    return this.http.post<IUsuario | null>( url, body);
  }
}
