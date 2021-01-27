import { Component, OnInit } from '@angular/core';
import { NodeApiService } from '../shared/services/node-api.service';
//import activate route
@Component({
  selector: 'app-node-api',
  templateUrl: './node-api.component.html',
  styleUrls: ['./node-api.component.scss']
})

export class NodeApiComponent implements OnInit {
  public data = null;

  constructor(private nodeApiService: NodeApiService) {}

  ngOnInit() {
    this.nodeApiService.all().subscribe(r_data => this.data = r_data);
  }
}