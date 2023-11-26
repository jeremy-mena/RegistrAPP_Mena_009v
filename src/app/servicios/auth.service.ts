import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Users, User, UsersA, IProfesores, IAlumnos} from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private httpClient: HttpClient,
              private router: Router) { }

  GetAllUsers():Observable<Users>{
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios`);
  }

  GetUserById(codigo:any): Observable<Users>{
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios/?username=${codigo}`);
  }

  IsLoggedIn() {
    return sessionStorage.getItem('username')!=null;
  }


  GetUserrole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }


  CrearUsuario(newUsuario: User): Observable<User>{
    return this.httpClient.post<Users>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

  GetAllProfesores():Observable<IProfesores>{
    return this.httpClient.get<IProfesores>(`${environment.apiUrl}/profesores`);
  }

  GetprofesorById(codigo:any): Observable<IProfesores>{
    return this.httpClient.get<IProfesores>(`${environment.apiUrl}/profesores/?nombre=${codigo}`);
  }



  GetAllUsersA():Observable<UsersA>{
    return this.httpClient.get<UsersA>(`${environment.apiUrl}/usuarios2`);
  }

  GetUserAById(codigo:any): Observable<UsersA>{
    return this.httpClient.get<UsersA>(`${environment.apiUrl}/usuarios2/?usernameA=${codigo}`);
  }

  IsLoggedIn2() {
    return sessionStorage.getItem('username2')!=null;
  }


  GetUserArole(){
    return sessionStorage.getItem('userrole2')!=null?sessionStorage.getItem('userrole2')?.toString():'';
  }



  GetAllAlumnos():Observable<IAlumnos>{
    return this.httpClient.get<IAlumnos>(`${environment.apiUrl}/alumnos`);
  }

  GetALumnosById(codigo:any): Observable<IAlumnos>{
    return this.httpClient.get<IAlumnos>(`${environment.apiUrl}/alumnos/?nombre=${codigo}`);
  }

  IsLoggedIn1() {
    return sessionStorage.getItem('nombre')!=null;
  }




  IsExiste(){
    if (this.IsLoggedIn()){
      return true
    }
    else{
      return false
    }
  }

  cerrarSesion() {

    this.router.navigate(['/home']);
  }

}

