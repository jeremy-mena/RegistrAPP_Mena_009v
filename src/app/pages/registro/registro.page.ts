import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/interfaces';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registroForm: FormGroup;
  //nombre: any;
  newUsuario: User={
    username:'',
    password: '',
    role:'',
    isactive:false
  }
  constructor(private menuController: MenuController,
              private authservice : AuthService, 
              private alertcontroller: AlertController, 
              private router: Router,
              private fbuilder: FormBuilder) {
                this.registroForm = this.fbuilder.group({
                  'username': new FormControl("", [Validators.required, Validators.minLength(4)]),
                  'password' : new FormControl("", [Validators.required, Validators.minLength(8)]),
                  'rol': new FormControl("", Validators.required),
                 })
                 //this.nombre = sessionStorage.getItem('username');
               }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  registrarUsuario(){
    if (this.registroForm.valid){
        this.newUsuario.username=this.registroForm.value.username;
        this.newUsuario.password=this.registroForm.value.password;
        this.newUsuario.role=this.registroForm.value.rol;
        this.newUsuario.isactive=true;
        
        this.authservice.CrearUsuario(this.newUsuario).subscribe();
        this.mostrarMensaje();
        this.registroForm.reset();
        this.router.navigateByUrl("/login");
    }
  }

  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Usuario creado!..',
      message:'Bienvenido '+ this.newUsuario.username + ' :D',
      buttons:['Ok']
    });
    alerta.present();
  }


}




