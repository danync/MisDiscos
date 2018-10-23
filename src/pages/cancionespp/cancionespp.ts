import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CancionesppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cancionespp',
  templateUrl: 'cancionespp.html',
})
export class CancionesppPage {
  cancionesplpl = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cancionesplpl=['1.	++.','2.	Hi High.','3.	favOriTe.','4.	열기.','5.	Perfect Love.','6.	Stylish.']
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionesppPage');
  }

}
