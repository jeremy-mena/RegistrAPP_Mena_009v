import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario={
    nombre:'',
    email:'',
    carrera:'',
    password:''
  }

  constructor(private menuController: MenuController,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async Enviar(){
    const alert = await this.alertController.create({
      header: 'Gracias!',
      message: 'Sus datos han sido enviados!',
      buttons: ['OK'],
    });
    await alert.present();
    this.usuario.nombre="";
    this.usuario.email="";
    this.usuario.carrera="";
    this.usuario.password="";
  }


}




