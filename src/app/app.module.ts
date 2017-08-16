import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import {HttpModule} from '@angular/http';
import {LoginPage, ProductosPage,ModalPage, TabsPage, PerfilPage} from '../pages/index.pages';
import { ProductoProvider } from '../providers/producto/producto';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ProductosPage,
    TabsPage,
    PerfilPage,
    ModalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ProductosPage,
    TabsPage,
    PerfilPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductoProvider
  ]
})
export class AppModule {}
