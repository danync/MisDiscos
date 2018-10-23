import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancionesYbPage } from './canciones-yb';

@NgModule({
  declarations: [
    CancionesYbPage,
  ],
  imports: [
    IonicPageModule.forChild(CancionesYbPage),
  ],
})
export class CancionesYbPageModule {}
