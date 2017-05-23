import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateNewEvent } from './create-new-event';

@NgModule({
  declarations: [
    CreateNewEvent,
  ],
  imports: [
    IonicPageModule.forChild(CreateNewEvent),
  ],
  exports: [
    CreateNewEvent
  ]
})
export class CreateNewEventModule {}
