import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-event-edit',
  templateUrl: 'event-edit.html',
})
export class EventEdit {
  private event: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = navParams.get('event')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventEdit')
  }

}
