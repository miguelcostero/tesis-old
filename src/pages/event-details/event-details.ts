import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetails {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('event', navParams.get('event'))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetails');
  }

}
