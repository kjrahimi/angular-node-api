import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-se-node-api';
  links = [
    {path: '/userguide', icon: 'save', title: 'UserGuide'},
    {path: '/nodeapi/:id', icon: 'delete', title: 'NodeAPI'}
  ];
  styleMarginLeft = '16px';
  styleMarginTop = '50px';
}
