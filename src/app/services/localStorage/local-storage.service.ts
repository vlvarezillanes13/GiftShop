import { Injectable } from '@angular/core';
import { IUsuario } from '../../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public guardarUsuario(key: string, value: IUsuario) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public obtenerUsuario(key: string) {
    return JSON.parse(localStorage.getItem(key))
  }

  public eliminarUsuario(key: string) {
    localStorage.removeItem(key);
  }

  public limpiarInfo() {
    localStorage.clear();
  }
}
