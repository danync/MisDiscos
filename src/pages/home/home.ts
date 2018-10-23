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
    this.navCtrl.push(this.presenty);
  }

  cancionesTear(){
    this.navCtrl.push(this.presenty);
  }

  resenasTear(){
    this.navCtrl.push(this.presenty);
  }

  BTS(){
    this.navCtrl.push(this.presenty);
  }

  Youngblood(){
    this.navCtrl.push(this.presenty);
  }

  cancionesYb(){
    this.navCtrl.push(this.presenty);
  }

  resenasYb(){
    this.navCtrl.push(this.presenty);
  }

  fivesos(){
    this.navCtrl.push(this.presenty);
  }

}

