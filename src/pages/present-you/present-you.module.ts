import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresentYouPage } from './present-you';

@NgModule({
  declarations: [
    PresentYouPage,
  ],
  imports: [
    IonicPageModule.forChild(PresentYouPage),
  ],
})
export class PresentYouPageModule {}
