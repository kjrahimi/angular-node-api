import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node-api',
  templateUrl: './node-api.component.html',
  styleUrls: ['./node-api.component.scss']
})

export class NodeApiComponent implements OnInit {
  model = 'https://local.sportsengine.com/node/api/v1?id='
  node = ''
  example = '11513'

  //need to subscribe to the observable
  constructor(private http: HttpClient) {}

  getNode(nodeId){
    //returning an Observable using HttpClient
    //console.log('incoming nodeId '+ nodeId);
    //console.log('model '+ this.model);
    return this.http.get(this.model+nodeId);
  }

  ngOnInit() {
    this.getNode(this.example).subscribe(function(data){
      this.node = data;
    });
    //this.getNode(this.example);
  }
  
}
