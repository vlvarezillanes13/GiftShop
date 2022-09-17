import { ICategoria } from './categoria.interface';
export interface IProducto{
    id: number;
    nombre: string;
    cantidad: number;
    descripcion: string;
    categoria: ICategoria;
}