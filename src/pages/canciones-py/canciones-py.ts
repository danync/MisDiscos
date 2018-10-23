import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CancionesPyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-canciones-py',
  templateUrl: 'canciones-py.html',
})
export class CancionesPyPage {
  cancionesPreY = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cancionesPreY=['1.	Lullaby (3:37).', '2.	Enough (3:19).','3.	Save You (3:26).','4.	No One Else (3:22).','5.	I Am Me (3:32).','6.	Sunrise (3:31).','7.	OMW (3:08).','8.	Made It (2:36).','9.	My Youth (3:33).','10.	Nobody Knows (3:07).','11.	Party (3:05).','12.	Fine (3:04).', '13.	Lullaby – English Ver. (3:38).', '14.	Lullaby – Chinese Ver. (3:38).','15.	Lullaby – Spanish Ver. (3:38).','16.	Lullaby – Inst. (3:37).']
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancionesPyPage');
  }

}
