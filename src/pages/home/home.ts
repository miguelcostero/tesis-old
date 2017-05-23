import { Component } from '@angular/core'
import { NavController, MenuController, AlertController, LoadingController, PopoverController } from 'ionic-angular'
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database'

import { Login } from '../login/login'
import { CreateNewEvent } from '../create-new-event/create-new-event'
import { EventDetails } from '../event-details/event-details'
import { EventEdit } from '../event-edit/event-edit'
 
import { Auth } from '../../providers/auth'
import { Events } from '../../providers/events'

import { FilterEventsPopover } from '../../components/filter-events-popover/filter-events-popover'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ Events ]
})
export class HomePage {
  private user
  private userData: FirebaseObjectObservable<any>
  public events: Array<any>
  private loading: any;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, private _auth: Auth, private db: AngularFireDatabase, private _events: Events, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private popoverCtrl: PopoverController) {
    _auth.af.auth.subscribe(user => {
      if (user) {
        this.user = user.auth
        this.userData = db.object(`/users/${this.user.uid}`)
      }
    })

    this.loading = loadingCtrl.create({
      dismissOnPageChange: true
    })

    this.loading.present()

    this.initializeEvents()
  }

  logOut() {
    this._auth.logoutUser()
    this.navCtrl.setRoot(Login)
  }

  initializeEvents() {
    this._events.getAll().subscribe(evento => {
      this.events = evento
      this.loading.dismiss()
    })
  }

  getEvents(e) {
    this.initializeEvents()

    let val: string = e.target.value

    if (val && val.trim() != '') {
      this._events.getAll().subscribe(event => {
        this.events = event.filter(v => {
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
    this.initializeEvents()
  }

  createNewEvent() {
    this.navCtrl.push(CreateNewEvent)
  }

  goToDetails(event): void {
    this.navCtrl.push(EventDetails, { event })
  }

  goToEdit(event): void {
    this.navCtrl.push(EventEdit, { event })
  }

  showDelete(event): void {
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
          text: 'Aceptar',
          handler: () => {
            console.log('deleted')
          }
        }
      ]
    })

    confirm.present()
  }

  showDates(event): void {
    let alert = this.alertCtrl.create({
      title: 'Fechas del evento',
      message: 'lorem khfjkdshf',
      buttons: [ 'OK' ]
    })

    alert.present()
  }

  presentPopover(e) {
    let popover = this.popoverCtrl.create(FilterEventsPopover)
    popover.present({
      ev: e
    })
  }
}
