import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  slideData = [{ image: "benches.jpg" },{ image: "bridge.jpg" },{ image: "coast.jpg" },{ image: "park.jpg" },
  { image: "rails.jpg" },{ image: "rocks.jpg" },{ image: "sky.jpg" },{ image: "traffic.jpg" },{ image: "tunnel.jpg" }];

  slideTitle = ["Arnav Technosys", "Assimilate Technologies", "ATJOIN", "Kunal Chaudhari", "Rahul Wable", "ShraOne Devade", "Rupesh Pagar", "Hrushikesh Gore", "Shankar Shelke" ];

  slideSubTitle = ["Yeola", "Pune", "India", "Badapur", "Bramhngaon", "Paregaon", "Mamaledar Lane", "Chichondi", "Suregaon"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
