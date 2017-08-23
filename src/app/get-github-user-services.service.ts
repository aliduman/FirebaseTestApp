import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetGithubUserServicesService {
  getGithubUsersData:any;

  constructor(
    public http:Http
  )
  { 
    
  }

  list() {
    return new Promise(resolve => {
      this.http.get('https://api.github.com/users')
        .map(res => res.json())
        .subscribe(data => {
          this.getGithubUsersData = data;
          resolve(this.getGithubUsersData);
        });
    });
  }

}
