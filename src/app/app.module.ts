import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PresentYouPage } from '../pages/present-you/present-you';
import { ResenasPyPage } from '../pages/resenas-py/resenas-py';
import { CancionesPyPage } from '../pages/canciones-py/canciones-py';
import { Got7Page } from '../pages/got7/got7';
import { PlusplusPage } from '../pages/plusplus/plusplus';
import { CancionesppPage } from '../pages/cancionespp/cancionespp';
import { ResenasppPage } from '../pages/resenaspp/resenaspp';
import { LoonaPage } from '../pages/loona/loona';
import { CancionesTearPage } from '../pages/canciones-tear/canciones-tear';
import { TearPage } from '../pages/tear/tear';
import { BtsPage } from '../pages/bts/bts';
import { ResenasTearPage } from '../pages/resenas-tear/resenas-tear';
import { YoungbloodPage } from '../pages/youngblood/youngblood';
import { CancionesYbPage } from '../pages/canciones-yb/canciones-yb';
import { ResenaYbPage } from '../pages/resena-yb/resena-yb';
import { FivesosPage } from '../pages/fivesos/fivesos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PresentYouPage,
    ResenasPyPage,
    CancionesPyPage,
    Got7Page,
    PlusplusPage,
    CancionesppPage,
    ResenasppPage,
    LoonaPage,
    CancionesTearPage,
    TearPage,
    BtsPage,
    ResenasTearPage,
    YoungbloodPage,
    CancionesYbPage,
    ResenaYbPage,
    FivesosPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PresentYouPage,
    ResenasPyPage,
    CancionesPyPage,
    Got7Page,
    PlusplusPage,
    CancionesppPage,
    ResenasppPage,
    LoonaPage,
    CancionesTearPage,
    TearPage,
    BtsPage,
    ResenasTearPage,
    ResenasTearPage,
    YoungbloodPage,
    CancionesYbPage,
    ResenaYbPage,
    FivesosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
