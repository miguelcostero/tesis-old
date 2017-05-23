import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventDetails } from './event-details';

@NgModule({
  declarations: [
    EventDetails,
  ],
  imports: [
    IonicPageModule.forChild(EventDetails),
  ],
  exports: [
    EventDetails
  ]
})
export class EventDetailsModule {}
