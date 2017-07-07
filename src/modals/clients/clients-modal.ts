import { Component } from '@angular/core'
import { NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular'
import { AngularFireDatabase } from 'angularfire2'

import { Client } from '../../interfaces/Client'

@Component({
	templateUrl: 'clients-modal.html'
})
export class ClientsModal {
	private clients: Client[]
	private loading: any
	private client: Client

	constructor(public viewCtrl: ViewController, private db: AngularFireDatabase, public loadingCtrl: LoadingController, public params: NavParams, public alertCtrl: AlertController) {
		this.client = this.params.get('client')

		this.loading = loadingCtrl.create({
			dismissOnPageChange: true
		})

		this.loading.present()

		this.initializeClients()
	}

	getClients(e) {
		this.initializeClients()

		let val: string = e.target.value

		if (val && val.trim() != '') {
			this.db.list('/clients').subscribe(client => {
				this.clients = client.filter(v => {
					if (v.name) {
						if (v.name.toLowerCase().indexOf(val.toLocaleLowerCase()) > -1) {
							return true
						}
						return false
					}
				})
			})
		}
	}

	onCancelSearchbar(e) {
		this.initializeClients()
	}

	initializeClients() {
		this.db.list('/clients').subscribe(clients => {
			this.clients = clients
			this.loading.dismiss()
		})
	}

	selectClient(e) {
		this.client = e    
		this.dismiss()
	}

	dismiss() {
		this.viewCtrl.dismiss(this.client)
	}

	createNewClient() {
		let prompt = this.alertCtrl.create({
			title: 'Agregar nuevo cliente',
			message: 'Agregue un nuevo cliente a la plataforma.',
			inputs: [
				{
					name: 'clientCedula',
					placeholder: 'Documento de identidad'
				},
				{
					name: 'clientFirstName',
					placeholder: 'Nombre'
				},
				{
					name: 'clientLastName',
					placeholder: 'Apellido'
				},
				{
					name: 'clientEmail',
					placeholder: 'Correo electrónico'
				},
				{
					name: 'clientPhone',
					placeholder: 'Teléfono'
				}
			],
			buttons: [
				{
					text: 'Cancelar',
					handler: data => {
						console.log('Cancel clicked')
					}
				},
				{
					text: 'Guardar',
					handler: data => {
						let client: Client = {
							firstName: data.clientFirstName,
							lastName: data.clientLastName,
							phone: data.clientPhone,
							email: data.clientEmail,
							cedula: data.clientCedula
						}
						this.db.list('/clients').push(client)
					}
				}
			]
		})
		prompt.present()
	}
}