import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralHomePage } from './general-home';

@NgModule({
  declarations: [
    GeneralHomePage,
  ],
  imports: [
    IonicPageModule.forChild(GeneralHomePage),
  ],
})
export class GeneralHomePageModule {}
