import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-get-data-list',
  templateUrl: './get-data-list.component.html',
  styleUrls: ['./get-data-list.component.css']
})
export class GetDataListComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) { 
    this.items = db.list('/items');
  }

  ngOnInit() {

  }

}
