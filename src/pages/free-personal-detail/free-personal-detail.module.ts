import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FreePersonalDetailPage } from './free-personal-detail';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FreePersonalDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FreePersonalDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    FreePersonalDetailPage
  ]
})
export class FreePersonalDetailPageModule {}
