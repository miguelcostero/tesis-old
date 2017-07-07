import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotificationsDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-notifications-details',
  templateUrl: 'notifications-details.html',
})
export class NotificationsDetailsPage {
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get('data')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsDetailsPage');
  }

}
