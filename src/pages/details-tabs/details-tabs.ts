import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { BusinessVideosPage } from '../business-videos/business-videos';
import { ProductServicesPage } from '../product-services/product-services';
import { ContactInfoPage } from '../contact-info/contact-info';

@IonicPage()
@Component({
  selector: 'page-details-tabs',
  templateUrl: 'details-tabs.html',
})
export class DetailsTabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  businessDetails = DetailsPage;
  videos = BusinessVideosPage;
  productsServices = ProductServicesPage;
  contactInfo = ContactInfoPage;

}
