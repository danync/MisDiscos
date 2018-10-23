import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BtsPage } from './bts';

@NgModule({
  declarations: [
    BtsPage,
  ],
  imports: [
    IonicPageModule.forChild(BtsPage),
  ],
})
export class BtsPageModule {}
