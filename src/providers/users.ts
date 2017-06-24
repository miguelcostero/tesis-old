import { Injectable } from '@angular/core'
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'

@Injectable()
export class Users {
  users: FirebaseListObservable<any[]>

  constructor(private db: AngularFireDatabase) {
    this.users = db.list('/users')
  }

  getAll(): FirebaseListObservable<any[]> {
    return this.users;
  }

  getUser(uid): FirebaseObjectObservable<any> {
    return this.db.object(`/users/${uid}`)    
  }

}
