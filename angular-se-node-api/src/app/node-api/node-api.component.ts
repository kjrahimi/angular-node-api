import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node-api',
  templateUrl: './node-api.component.html',
  styleUrls: ['./node-api.component.scss']
})
export class NodeApiComponent implements OnInit {

  constructor(private http: HttpClientModule) {

  }

  ngOnInit(): void {
  }

}
