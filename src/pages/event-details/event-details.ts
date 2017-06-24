import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Event } from '../../interfaces/Event'

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetails {
  private event: Event

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = navParams.get('event')
  }

  ionViewDidLoad() {}

}
