import { Component } from '@angular/core'
import { NavController, MenuController } from 'ionic-angular'

import { Login } from '../login/login'

import { Auth } from '../../providers/auth'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, private _auth: Auth) {

  }

  logOut() {
    this._auth.logoutUser()
    this.navCtrl.setRoot(Login)
  }
}
