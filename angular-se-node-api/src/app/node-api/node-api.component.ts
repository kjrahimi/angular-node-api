import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import activate route
@Component({
  selector: 'app-node-api',
  templateUrl: './node-api.component.html',
  styleUrls: ['./node-api.component.scss']
})

export class NodeApiComponent implements OnInit {
  private base_url = 'https://local.sportsengine.com/node/api/v1?id=';
  private node = '11991';
  r_data = null;

  //need to subscribe to the observable
  constructor(private http: HttpClient) {}

  all(){
    return this.http.get(`${this.base_url}${this.node}`);
  }
  //

  ngOnInit() {
    this.all().subscribe(r_data => this.r_data = r_data);
    console.log(this.r_data);
  }
  
}
