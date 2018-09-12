import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessVideosPage } from './business-videos';

@NgModule({
  declarations: [
    BusinessVideosPage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessVideosPage),
  ],
})
export class BusinessVideosPageModule {}
