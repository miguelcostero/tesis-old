import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterEventsPopover } from './filter-events-popover';

@NgModule({
  declarations: [
    FilterEventsPopover,
  ],
  imports: [
    IonicPageModule.forChild(FilterEventsPopover),
  ],
  exports: [
    FilterEventsPopover
  ]
})
export class FilterEventsPopoverModule {}
