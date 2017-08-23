import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GetFirebaseDataService {
  items: FirebaseListObservable<any[]>;
  data: any;
  constructor(public db: AngularFireDatabase) {
    this.items = db.list("/");
    this.data = this.items;
  }
  getData() {
    return this.data;
  }

}
