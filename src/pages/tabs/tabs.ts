import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProductosPage, PerfilPage} from '../index.pages';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

declare var io: any;

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: any = ProductosPage;
  tab2: any = PerfilPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    io.sails.url = "http://port-1337.productos-davichochaos356130.codeanyapp.com/";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
