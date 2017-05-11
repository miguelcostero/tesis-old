import { Component } from '@angular/core'
import { NavController, MenuController } from 'ionic-angular'
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database'

import { Login } from '../login/login'

import { Auth } from '../../providers/auth'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private user;
  private userData: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, private _auth: Auth, private db: AngularFireDatabase) {
    _auth.af.auth.subscribe(user => {
      if (user) {
        this.user = user.auth
        this.userData = db.object(`/users/${this.user.uid}`)
      }
    })
  }

  logOut() {
    this._auth.logoutUser()
    this.navCtrl.setRoot(Login)
  }
}
