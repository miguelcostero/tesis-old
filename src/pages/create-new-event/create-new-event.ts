import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular'
import * as moment from 'moment'

// import providers
import { Events } from '../../providers/events'

// import interfaces
import { Event } from '../../interfaces/Events'
import { Itinerary } from '../../interfaces/Itinerary'
import { Client } from '../../interfaces/Client'

// import modals
import { EventTypeModal } from '../../modals/event-type/event-type-modal'
import { ClientsModal } from '../../modals/clients/clients-modal'

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
		this.navParams.data.user.subscribe(user => {
			this.event.createdBy.fullName = `${user.firstName} ${user.lastName}`
			this.event.createdBy.uid = this.navParams.data.uid
		})
		this.itinerary = new Itinerary("Descripción del evento", this.whatDate, this.whatTime, "GTM +4:00")
	}

	onSubmit() {
		this.event ? this._events.getAll().push(this.event) : console.error('ERROR')
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
		if (this.event.itinerary.length < 2) {
			let alert = this.alertCtrl.create({
				title: 'El cronograma debe tener como mímino un evento',
				buttons: [ 'OK' ]
			})
			alert.present()
		} else {
			let confirm = this.alertCtrl.create({
				title: '¿Está seguro que desea eliminar este evento?',
				message: 'Si acepta, este evento no podrá ser recuperado.',
				buttons: [
					{
						text: 'Cancelar',
						handler: () => {
							console.log('no deleted')
						}
					},
					{
						text: 'Eliminar',
						handler: () => {
							this.event.itinerary.splice(index, 1)
						}
					}
				]
			})
			confirm.present()
		} 
	}

	initializeEvent() {
		let beta = new Itinerary("", moment().format(), moment().format(), "GTM +4:00")
		this.event = {
			name: "",
			status: "Pendiente",
			icon: "star",
			type: "",
			itinerary: [
				beta
			],
			dateAdded: moment().format(),
			client: {
				cedula: "",
				email: "",
				firstName: "",
				lastName: "",
				phone: ""
			},
			location: {
				name: "",
				address: "",
				capacity: 10
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

	presentClientsModal(client: Client) {
		let modal = this.modalCtrl.create(ClientsModal, client)
		modal.present()
		modal.onDidDismiss(client => {
			this.event.client = {
				cedula: client.cedula,
				email: client.email,
				firstName: client.firstName,
				lastName: client.lastName,
				phone: client.phone
			}
		})
	}

	addNewItinerary() {
		let lastItenary = this.event.itinerary[this.event.itinerary.length - 1]
		this.event.itinerary.push(new Itinerary("", lastItenary.time, lastItenary.date, lastItenary.timezone))
	}
}