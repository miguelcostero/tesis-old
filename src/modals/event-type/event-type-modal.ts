import { Component } from '@angular/core'
import { NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular'
import { AngularFireDatabase } from 'angularfire2'

@Component({
	templateUrl: 'event-type-modal.html'
})
export class EventTypeModal {
	private types: any[]
	private loading: any
	private type: { name: string }

	constructor(public viewCtrl: ViewController, private db: AngularFireDatabase, public loadingCtrl: LoadingController, public params: NavParams, public alertCtrl: AlertController) {
		this.type = { name: this.params.get('type') }

		this.loading = loadingCtrl.create({
			dismissOnPageChange: true
		})

		this.loading.present()

		this.initializeTypes()
	}

	getTypes(e) {
		this.initializeTypes()

		let val: string = e.target.value

		if (val && val.trim() != '') {
			this.db.list('/events-type').subscribe(types => {
				this.types = types.filter(v => {
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
		this.initializeTypes()
	}

	initializeTypes() {
		this.db.list('/events-type').subscribe(types => {
			this.types = types
			this.loading.dismiss()
		})
	}

	selectType(e) {
		this.type = e    
		this.dismiss()
	}

	dismiss() {
		this.viewCtrl.dismiss(this.type)
	}

	createNewEventType() {
		let prompt = this.alertCtrl.create({
			title: 'Crear nuevo tipo de evento',
			message: "Ingrese el nombre de su nuevo tipo de evento",
			inputs: [
				{
					name: 'eventType',
					placeholder: 'Tipo de evento'
				},
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
						this.db.list('/events-type').push({ name: data.eventType })
					}
				}
			]
		})
		prompt.present()
	}
}