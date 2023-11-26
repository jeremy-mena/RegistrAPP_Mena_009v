import { Component, OnInit } from '@angular/core';
import { IPalabra,IPalabras } from '../interfaces/interfaces';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  public qrContent: string;
  public currentDate: string;
  

  //npm install -D @types/qrcode --save

  data={
    texto:''
  }

  nombre: any;

  newPalabra:IPalabra={
    palabra: '',
    username: ''
  }

  constructor(private apicrud: ApiCrudService,
              private alertcontroller: AlertController,
              private router: Router,
              private menuController: MenuController) { 
    this.qrContent='Duoc';
    this.nombre = sessionStorage.getItem('username');
    this.currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
   }

  ngOnInit() {
    
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

generarQr() {
  this.qrContent = `${this.data.texto} - Fecha: ${this.currentDate}`;
  this.newPalabra.palabra = this.qrContent;
  this.newPalabra.username = this.nombre;
  this.apicrud.CrearPalabra(this.newPalabra).subscribe();
  this.mostrarMensaje();
  this.data.texto = '';
}


  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Creación de palabra..',
      message:'Su código Qr ha sido almacenado',
      buttons:['Ok']
    });
    alerta.present();
  }



}
