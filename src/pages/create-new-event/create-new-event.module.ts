import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { IonicPageModule } from 'ionic-angular'
import { CreateNewEvent } from './create-new-event'

// import modals
import { EventTypeModal } from '../../modals/event-type/event-type-modal'

@NgModule({
  declarations: [
    CreateNewEvent,
    EventTypeModal
  ],
  imports: [
    FormsModule,
    IonicPageModule.forChild(CreateNewEvent),
  ],
  exports: [
    CreateNewEvent,
    EventTypeModal
  ]
})
export class CreateNewEventModule {}
