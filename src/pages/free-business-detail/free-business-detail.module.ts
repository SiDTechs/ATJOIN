import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FreeBusinessDetailPage } from './free-business-detail';

@NgModule({
  declarations: [
    FreeBusinessDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FreeBusinessDetailPage),
  ],
})
export class FreeBusinessDetailPageModule {}
