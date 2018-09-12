import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FreePersonalDetailPage } from '../free-personal-detail/free-personal-detail';
import { FreeBusinessDetailPage } from '../free-business-detail/free-business-detail';
import { FreeUploadImagePage } from '../free-upload-image/free-upload-image';

@IonicPage()
@Component({
  selector: 'page-free-dashboard-tabs',
  templateUrl: 'free-dashboard-tabs.html',
})
export class FreeDashboardTabsPage {

  freePersonalDetail = FreePersonalDetailPage;
  freeBusinessDetail = FreeBusinessDetailPage;
  freeUploadImage = FreeUploadImagePage;
  
}
