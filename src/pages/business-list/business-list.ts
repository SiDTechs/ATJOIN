import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsTabsPage } from '../details-tabs/details-tabs';

@IonicPage()
@Component({
  selector: 'page-business-list',
  templateUrl: 'business-list.html',
})
export class BusinessListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessListPage');
  }

  details () {
    this.navCtrl.push(DetailsTabsPage);
  }
}
