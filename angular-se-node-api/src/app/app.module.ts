import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { NodeApiComponent } from './node-api/node-api.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NodeApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
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
    },
    {
      id: 3,
      title: 'Angular 9 Fundamentals 3',
      description: 'Learn the fundamentals of Angular 9 3',
      percentComplete: 98,
      favorite: false
    }
  ];

}
