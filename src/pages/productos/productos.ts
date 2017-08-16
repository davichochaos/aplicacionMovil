import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import {ModalPage} from '../index.pages';


import {Producto} from '../../interface/producto.module';
import {ProductoProvider} from '../../providers/producto/producto';

declare var io: any;

/**
 * Generated class for the ProductosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {

  listaMenu: Producto [] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl: ModalController,
              private _producPrv: ProductoProvider) {


    this._producPrv.consultarMenu().subscribe(
      respuesta => {
        this.listaMenu = respuesta;
        console.log(this.listaMenu);
      }
    );

    io.socket.on('producto', (objeto) => {
      console.log(objeto);

      if(objeto.verb === 'created'){
        this.actualizarLista(objeto.data);
      }
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
  }

  actualizarLista(nuevoProducto: Producto){
    this.listaMenu.push(nuevoProducto);
  }a
    categorias(){
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
    modal.onDidDismiss( resultado =>{
      if(resultado){
        console.log(resultado);
      }
    });
  }
}
