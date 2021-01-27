import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-node-api-list',
  templateUrl: './node-api-list.component.html',
  styleUrls: ['./node-api-list.component.scss']
})
export class NodeApiListComponent implements OnInit {
  @Input() list;

  constructor() { }

  ngOnInit(): void {
  }

}
