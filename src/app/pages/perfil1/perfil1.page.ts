import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-perfil1',
  templateUrl: './perfil1.page.html',
  styleUrls: ['./perfil1.page.scss'],
})
export class Perfil1Page implements OnInit {
  nombre: any;
  asignatura1: any;
  asignatura2: any;

  profesor ={
    id:0,
    nombre:"",
    apellido:"",
    telefono:0,
    asignatura1:"",
    asignatura2:""
  }

  constructor(private apiCrud: ApiCrudService, 
              private router: Router,
              private authService: AuthService,
              private menuController: MenuController) { }


  ionViewWillEnter(){
    this.getProfesorById(this.getIdFromUrl());
  }
  cerrarSesion() {
    this.router.navigate(['/home']);
    this.authService.cerrarSesion();
  }


  ngOnInit() {
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getProfesorById(profesorID:number){
    this.apiCrud.BuscarProfesorID(profesorID).subscribe(
      (resp:any)=>{                 //resp llega en formato de arreglo de un objeto 
        this.profesor={
          id: resp[0].id,
          nombre: resp[0].nombre,
          apellido: resp[0].apellido,
          telefono: resp[0].telefono,
          asignatura1: resp[0].asignatura1,
          asignatura2: resp[0].asignatura2
        }
      }
    )
  }

  updateProfesor(){
    this.apiCrud.ActualizarProfesor(this.profesor).subscribe();
    this.router.navigateByUrl("/profesor");
}
  mostrarMenu(){
    this.menuController.open('first');
  }
}
