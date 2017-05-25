import { Injectable } from '@angular/core'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2'

@Injectable()
export class Events {
  public events: FirebaseListObservable<any[]>

  constructor(private db: AngularFireDatabase) {
    this.events = db.list('/events')
  }

  getAll(): FirebaseListObservable<any[]> {
    return this.events
  }

  queryByStatus(status: string): FirebaseListObservable<any[]> {
    return this.db.list('/events', {
      query: {
        orderByChild: 'status',
        equalTo: status
      }
    })
  }

}
