import { Component, OnInit,Input,Output } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { NgbModule, IAlert } from '@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js';
import { GetFirebaseDataService } from './../get-firebase-data.service';
import { GetGithubUserServicesService } from './../get-github-user-services.service';

@Component({
  selector: 'app-get-data-list',
  templateUrl: './get-data-list.component.html',
  styleUrls: ['./get-data-list.component.css']
})
export class GetDataListComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  
  name:string;
  surname:string;
  userData:any;
  
  constructor(
    public getServicesData:GetFirebaseDataService,
    public getGitHubUsers:GetGithubUserServicesService
  ) 
  { 
    this.userData = [
      {name:"Ali",surname:"Duman"},
      {name:"Harun",surname:"Duman"},
      {name:"Recep",surname:"Duman"},
    ]
    this.name="Ali";
    this.surname="Duman";
  }
  ngOnInit() {

  }
  addData(){
    this.userData.push({name:"",surname:""});
  }

}
