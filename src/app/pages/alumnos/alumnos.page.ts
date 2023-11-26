import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {
  nombre: any;
  apellidop: any;
  apellidom: any;

  alumnos ={
    id: 1,
    nombre: "",
    apellidop: "",
    apellidom: "",
    telefono: 0
  }

  constructor(private menuController: MenuController,
              private apiCrud: ApiCrudService, 
              private router: Router,
              private authService: AuthService) 

                      {this.nombre = sessionStorage.getItem('username'); 
                       this.apellidop = sessionStorage.getItem('apellidop')
                       this.apellidom = sessionStorage.getItem('apellidom')}
  
  ionViewWillEnter(){
    this.getAlumnoById(this.getIdFromUrl());
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

  getAlumnoById(alumnoID:number){
    this.apiCrud.BuscarAlumnoID(alumnoID).subscribe(
      (resp:any)=>{                 //resp llega en formato de arreglo de un objeto 
        this.alumnos={
          id: resp[0].id,
          nombre: resp[0].nombre,
          apellidop: resp[0].apellido,
          apellidom: resp[0].apellido,
          telefono: resp[0].telefono,
        }
      }
    )
  }

  updateAlumno(){
    this.apiCrud.ActualizarAlumno(this.alumnos).subscribe();
    this.router.navigateByUrl("/listar");
}

  mostrarMenu(){
    this.menuController.open('first');
  }

}
