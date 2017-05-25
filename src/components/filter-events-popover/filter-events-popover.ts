import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular'

@Component({
	selector: 'filter-events-popover',
	templateUrl: 'filter-events-popover.html'
})
export class FilterEventsPopover {

	constructor(private viewCtrl: ViewController) {
	}

	filterBy(status: string) {
		this.viewCtrl.dismiss(status)
	}

}
