import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, MenuController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { FreeDashboardTabsPage } from '../free-dashboard-tabs/free-dashboard-tabs';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };
  postList = [];

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    private menu: MenuController,
    private remoteService: RemoteServiceProvider) {
    // this.remoteService.getPosts();
    this.menu.enable(false);

    this.remoteService.getRemoteData();

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  // getPosts() {
  //   this.remoteService.getPosts().subscribe((data) => {
  //     this.postList = data;
  //   });
  // }

  goFreeDashboard() {
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(FreeDashboardTabsPage);
    }, (err) => {
      this.navCtrl.push(FreeDashboardTabsPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    });
  }
}