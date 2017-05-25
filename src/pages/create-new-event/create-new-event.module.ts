import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicPageModule } from 'ionic-angular';
import { CreateNewEvent } from './create-new-event';

@NgModule({
  declarations: [
    CreateNewEvent,
  ],
  imports: [
    FormsModule,
    IonicPageModule.forChild(CreateNewEvent),
  ],
  exports: [
    CreateNewEvent
  ]
})
export class CreateNewEventModule {}
