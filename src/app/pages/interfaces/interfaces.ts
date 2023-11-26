export interface IProfesores{
    id:number;
    nombre:String;
    apellido: string;
    telefono: number;
    asignatura1:String;
    asignatura2:String;
}

export interface IProfesor{
    nombre:String;
    apellido: string;
    telefono: number;
    asignatura1:String;
    asignatura2:String;
}

//get, put, delete
export interface Users{
    id: number,
    username: String;
    password:String;
    role: String;
    isactive: boolean;
}

//post
export interface UserA{
    username: String;
    password:String;
    role: String;
    isactive: boolean;
}

export interface UsersA{
    id: number,
    username: String;
    password:String;
    role: String;
    isactive: boolean;
}

//post
export interface User{
    username: String;
    password:String;
    role: String;
    isactive: boolean;
}

//metodo post
export interface IPalabra{
    palabra: string;
    username: string;
}

//get, put, delete
export interface IPalabras{
    id: number;
    palabra: string;
    username: string;
}

export interface IAlumnos{
    id: number,
    nombreA: string,
    apellidop: string,
    apellidom: string,
    telefono: number
}

export interface IAlumno{
    nombreA: string,
    apellidop: string,
    apellidom: string,
    telefono: number
}
