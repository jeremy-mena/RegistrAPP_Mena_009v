import { Component } from '@angular/core';


interface Componente{
  name: string;
  redirecTo: string;
  icon:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  componentes: Componente[]=[
    {
      name:'Home',
      redirecTo:'/home',
      icon:'home-outline'
    },
    {
      name:'Login',
      redirecTo:'/login',
      icon:'log-in-outline'
    },
    {
      name:'Registro',
      redirecTo:'/registro',
      icon:'albums-outline'
    },
    {
      name:'Somos',
      redirecTo:'/somos',
      icon:'newspaper-outline'
    },

  ]

  constructor() {
    
  }
  
}
