import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

//import { Producto } from '../../interface/producto.module';

/*
  Generated class for the ProductoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProductoProvider {

  url: string = "http://port-1337.productos-davichochaos356130.codeanyapp.com/producto";

  constructor(public http: Http) {
    console.log('Hello PedidoProvider Provider');
  }

  consultarMenu(){

    return this.http.get(this.url).map(
      respuesta => {
        return respuesta.json();
      });
  }

}

