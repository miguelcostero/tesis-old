import { Injectable } from '@angular/core'
import { AngularFire } from 'angularfire2'
import firebase from 'firebase'

@Injectable()
export class Auth {
  fireAuth: any

  constructor(public af: AngularFire) {
    af.auth.subscribe( user => {
      if (user) {
        this.fireAuth = user.auth
      }
    });
  }

  loginUser(email: string, password: string): firebase.Promise<any> {
    return this.af.auth.login({ email, password })
  }

  resetPassword(email: string): firebase.Promise<any> {
    return firebase.auth().sendPasswordResetEmail(email)
  }

  logoutUser(): firebase.Promise<any> {
    return this.af.auth.logout()
  }

  singupUser(email: string, password: string): firebase.Promise<any> {
    return this.af.auth.createUser({ email, password })
  }

}
