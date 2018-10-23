import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CancionesYbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-canciones-yb',
  templateUrl: 'canciones-yb.html',
})
export class CancionesYbPage {

  cancionesYoung = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cancionesYoung=['1. Youngblood.', '2.	Want You Back.','3.	Lie To Me.','4.	Valentine.','5.	Talk Fast.','6.	Moving Along.','7.	If Walls Could Talk.','8.	Better Man.','9.	More.','10.	Why Won’t You Love Me.','11.	Woke Up In Japan.','12.	Empty Wallets.', '13.	Ghost Of You.', '14.	Monster Among Men.','15.	Meet You There.','16.	Babylon.']
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionesYbPage');
  }

}
