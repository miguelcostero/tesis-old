import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular'

@Component({
  selector: 'filter-events-popover',
  templateUrl: 'filter-events-popover.html'
})
export class FilterEventsPopover {

  text: string;

  constructor(private viewCtrl: ViewController) {
    console.log('Hello FilterEventsPopover Component');
    this.text = 'Hello World';
  }

  close() {
    this.viewCtrl.dismiss()
  }

}
