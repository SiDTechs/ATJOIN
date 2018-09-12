import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BusinessListPage } from '../business-list/business-list';

@IonicPage()
@Component({
  selector: 'page-general-home',
  templateUrl: 'general-home.html',
})
export class GeneralHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralHomePage');
  }

  businessList () {
    this.navCtrl.push(BusinessListPage);
  }

}
