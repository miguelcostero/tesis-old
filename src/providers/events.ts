import { Injectable } from '@angular/core'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2'

@Injectable()
export class Events {
  constructor(private db: AngularFireDatabase) {}

  getAll(): FirebaseListObservable<any[]> {
    return this.db.list('/events')
  }

  getBy(orderByChild: string, startAt: string): FirebaseListObservable<any[]> {
    return this.db.list('/events', {
      query: {
        orderByChild,
        startAt
      }
    })
  }

}
