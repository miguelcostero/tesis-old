import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular'

// import providers
import { Events } from '../../providers/events'

// import interfaces
import { Event } from '../../interfaces/Events'

@IonicPage()
@Component({
  selector: 'page-create-new-event',
  templateUrl: 'create-new-event.html',
  providers: [ Events ]
})
export class CreateNewEvent {
  whatDate = new Date().toJSON().split('T')[0]
  whatTime = new Date().toJSON().split('T')[1]
  event: Event

  constructor(public navCtrl: NavController, public navParams: NavParams, private _events: Events, private alertCtrl: AlertController) {
    this.initializeEvent()
    navParams.data.user.subscribe(user => {
      this.event.createdBy.fullName = `${user.firstName} ${user.lastName}`
      this.event.createdBy.uid = navParams.data.uid
    })
  }

  onSubmit() {
    this._events.getAll().push(this.event)
    this.initializeEvent()
    let alert = this.alertCtrl.create({
      title: "Nuevo evento agregado",
      subTitle: "Su nuevo evento ha sido agregado satisfactoriamente.",
      buttons: ["OK"],
    })
    alert.present()
    this.navCtrl.popToRoot()
  }

  ionViewDidLoad() {}

  initializeEvent() {
    this.event = {
      name: "",
      status: "Pendiente",
      icon: "star",
      type: "",
      date: "",
      dateAdded: Date.now(),
      client: {
        ci: "",
        email: "",
        firstName: "",
        lastName: "",
        telephone: ""
      },
      location: {
        name: "",
        address: "",
        capacity: 0
      },
      time: {
        start: "",
        timezone: ""
      },
      createdBy: {
        fullName: "",
        uid: ""
      }
    }
  }
}
