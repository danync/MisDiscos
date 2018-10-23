import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PresentYouPage } from '../present-you/present-you';
import { CancionesPyPage } from '../canciones-py/canciones-py';
import { ResenasPyPage } from '../resenas-py/resenas-py';
import { Got7Page } from '../got7/got7';
import { PlusplusPage } from '../plusplus/plusplus';
import { CancionesppPage } from '../cancionespp/cancionespp';
import { ResenasppPage } from '../resenaspp/resenaspp';
import { LoonaPage } from '../loona/loona';
import { TearPage } from '../tear/tear';
import { CancionesTearPage } from '../canciones-tear/canciones-tear';
import { ResenasTearPage } from '../resenas-tear/resenas-tear';
import { BtsPage } from '../bts/bts';
import { YoungbloodPage } from '../youngblood/youngblood';
import { CancionesYbPage } from '../canciones-yb/canciones-yb';
import { ResenaYbPage } from '../resena-yb/resena-yb';
import { FivesosPage } from '../fivesos/fivesos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  presenty = PresentYouPage;
  cancionesPrY = CancionesPyPage;
  resenasPrY = ResenasPyPage;
  gotsev = Got7Page;
  plus = PlusplusPage;
  cancionesPl = CancionesppPage;
  resenasPl = ResenasppPage;
  luna = LoonaPage;

  tear = TearPage;
  cancionesTr = CancionesTearPage;
  resenasTr = ResenasTearPage;
  bangtan = BtsPage;
  youngb = YoungbloodPage;
  cancionesygb = CancionesYbPage;
  resenasygb = ResenaYbPage;
  fivesec = FivesosPage;



  constructor(public navCtrl: NavController) {

  }

  PresentYou(){
    this.navCtrl.push(this.presenty);
  }

  cancionesPY(){
    this.navCtrl.push(this.cancionesPrY);
  }

  resenasPY(){
    this.navCtrl.push(this.resenasPrY);
  }

  GOT7(){
    this.navCtrl.push(this.gotsev);
  }

  PlusPlus(){
    this.navCtrl.push(this.plus)
  }

  cancionesPP(){
    this.navCtrl.push(this.cancionesPl);
  }

  resenasPP(){
    this.navCtrl.push(this.resenasPl);
  }

  LOONA(){
    this.navCtrl.push(this.luna);
  }

  Tear(){
    this.navCtrl.push(this.tear);
  }

  cancionesTear(){
    this.navCtrl.push(this.cancionesTr);
  }

  resenasTear(){
    this.navCtrl.push(this.resenasTr);
  }

  BTS(){
    this.navCtrl.push(this.bangtan);
  }

  Youngblood(){
    this.navCtrl.push(this.youngb);
  }

  cancionesYb(){
    this.navCtrl.push(this.cancionesygb);
  }

  resenasYb(){
    this.navCtrl.push(this.resenasygb);
  }

  fivesos(){
    this.navCtrl.push(this.fivesec);
  }

}

