import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-product-services',
  templateUrl: 'product-services.html',
})
export class ProductServicesPage {

  Products = ['benches.jpg', 'bridge.jpg', 'coast.jpg', 'park.jpg', 'rails.jpg', 'rocks.jpg', 'sky.jpg',
              'traffic.jpg', 'tunnel.jpg'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductServicesPage');
  }

}
