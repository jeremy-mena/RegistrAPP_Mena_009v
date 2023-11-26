import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProfesores, IPalabra, IPalabras } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { IProfesor } from '../pages/interfaces/interfaces';
import { IAlumno, IAlumnos } from '../pages/interfaces/interfaces';
 

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private httpclient:HttpClient) { }

  listarUsuarios():Observable<IProfesores>{
    return this.httpclient.get<IProfesores>(`${environment.apiUrl}/profesores`);
  }

  CrearUsuarios(newUsuario: IProfesor): Observable<IProfesor>{
    return this.httpclient.post<IProfesores>(`${environment.apiUrl}/profesores`, newUsuario);
  }

  BuscarProfesorID(id:number):Observable<IProfesores>{
    return this.httpclient.get<IProfesores>(`${environment.apiUrl}/profesores/?id=${id}`);
  }

  ActualizarProfesor(profesor:any):Observable<IProfesores>{
    return this.httpclient.put<IProfesores>(`${environment.apiUrl}/profesores/${profesor.id}`, profesor);
  }

  EliminarUsuarios (usuarios:any): Observable<IProfesores>{
    return this.httpclient.delete<IProfesores>(`${environment.apiUrl}/profesores/${usuarios.id}`);
  }
  CrearPalabra(newPalabra: IPalabra): Observable<IPalabra>{
    return this.httpclient.post<IPalabras>(`${environment.apiUrl}/palabras`, newPalabra);
  }

  BuscarAlumnoID(id:number):Observable<IAlumnos>{
    return this.httpclient.get<IAlumnos>(`${environment.apiUrl}/alumnos/?id=${id}`);
  }

  ActualizarAlumno(alumno:any):Observable<IAlumnos>{
    return this.httpclient.put<IAlumnos>(`${environment.apiUrl}/profesores/${alumno.id}`, alumno);
  }


  


}
