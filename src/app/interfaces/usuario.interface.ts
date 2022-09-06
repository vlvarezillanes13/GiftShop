export interface IUsuario{
    nombre:string;
    apellido:string;
    username:string;
    password:string;
    estado:boolean;
    rol:IRol;
}

export enum IRol{
    ADMINSITRADOR,
    TRABAJADOR,
    CLIENTE
}