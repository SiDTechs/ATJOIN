import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FreeUploadImagePage } from './free-upload-image';

@NgModule({
  declarations: [
    FreeUploadImagePage,
  ],
  imports: [
    IonicPageModule.forChild(FreeUploadImagePage),
  ],
})
export class FreeUploadImagePageModule {}
