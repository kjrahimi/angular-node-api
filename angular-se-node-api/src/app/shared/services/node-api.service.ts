import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const base_url = 'https://local.sportsengine.com/node/api/v1?id=';

@Injectable({
  providedIn: 'root'
})
export class NodeApiService {
  //private n_id = '11990';
  private id = null;

  constructor(private http: HttpClient) { }

  //returns an observable
  getNode(id){
    this.id = id;
    //this.id = this.id.substring(1);
    return this.http.get(`${base_url}${this.id}`);
  }
}
