import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular'

// import providers
import { Events } from '../../providers/events'

// import interfaces
import { Event, Itinerary } from '../../interfaces/Events'

// import modals
import { EventTypeModal } from '../../modals/event-type/event-type-modal'

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
	itinerary: Itinerary

	constructor(public navCtrl: NavController, public navParams: NavParams, private _events: Events, private alertCtrl: AlertController, public modalCtrl: ModalController) {
		this.initializeEvent()
		navParams.data.user.subscribe(user => {
			this.event.createdBy.fullName = `${user.firstName} ${user.lastName}`
			this.event.createdBy.uid = navParams.data.uid
		})
		this.itinerary = new Itinerary("Descripción del evento", this.whatDate, this.whatTime, "GTM +4:00")
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

	deleteItinerary(index) {
		this.event.itinerary.splice(index, 1)
		console.log(this.event)
	}

	initializeEvent() {
		let beta = new Itinerary("Descripción del evento", this.whatDate, this.whatTime, "GTM +4:00")
		this.event = {
			name: "",
			status: "Pendiente",
			icon: "star",
			type: "",
			itinerary: [
				beta
			],
			dateAdded: new Date(),
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

	presentEventTypeModal(type: string = '') {
		let modal = this.modalCtrl.create(EventTypeModal, { type })

		modal.present()
		modal.onDidDismiss(type => {
			this.event.type = type.name
		})
	}

	addNewItinerary() {
		this.event.itinerary.push(new Itinerary("Descripción del evento", this.whatDate, this.whatTime, "GTM +4:00"))
	}
}