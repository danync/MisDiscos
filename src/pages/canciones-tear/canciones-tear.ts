import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CancionesTearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-canciones-tear',
  templateUrl: 'canciones-tear.html',
})
export class CancionesTearPage {
  cancionesTr = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cancionesTr=['1.	Intro: Singularity.', '2.	FAKE LOVE.', '3.	The Truth Untold.', '4.	134340.','5.	Paradise.','6.	Love Maze.','7.	Magic Shop.','8.	Airplane pt.2. ','9.	Anpanman.','10.	So What.','11.	Outro: Tear.']
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionesTearPage');
  }

}
