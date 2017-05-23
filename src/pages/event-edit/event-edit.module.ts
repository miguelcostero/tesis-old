import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventEdit } from './event-edit';

@NgModule({
  declarations: [
    EventEdit,
  ],
  imports: [
    IonicPageModule.forChild(EventEdit),
  ],
  exports: [
    EventEdit
  ]
})
export class EventEditModule {}
