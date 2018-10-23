import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancionesTearPage } from './canciones-tear';

@NgModule({
  declarations: [
    CancionesTearPage,
  ],
  imports: [
    IonicPageModule.forChild(CancionesTearPage),
  ],
})
export class CancionesTearPageModule {}
