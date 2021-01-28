import { Component, OnInit } from '@angular/core';
import { NodeApiService } from '../shared/services/node-api.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
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
  public id = null;

  constructor(private nodeApiService: NodeApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.pipe(map(value => value.id.substring(1))).subscribe(id => this.id = id);
    this.nodeApiService.getNode(this.id).subscribe(r_data => this.data = r_data);
  }
}