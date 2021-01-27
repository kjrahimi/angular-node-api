import { Component, OnInit } from '@angular/core';
import { NodeApiService } from '../shared/services/node-api.service';
//import activate route
@Component({
  selector: 'app-node-api',
  templateUrl: './node-api.component.html',
  styleUrls: ['./node-api.component.scss']
})

export class NodeApiComponent implements OnInit {
   nodeapilist = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals!',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'Angular 9 Fundamentals 2',
      description: 'Learn the fundamentals of Angular 9 2',
      percentComplete: 21,
      favorite: false
    }
  ];

  public data = null;

  constructor(private nodeApiService: NodeApiService) {}

  ngOnInit() {
    this.nodeApiService.all().subscribe(r_data => this.data = r_data);
  }
}