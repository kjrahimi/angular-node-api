import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const base_url = 'https://local.sportsengine.com/node/api/v1?id=';

@Injectable({
  providedIn: 'root'
})
export class NodeApiService {
  //private n_id = '11990';
  //private id = null;

  constructor(private http: HttpClient) { }

  //returns an observable
  getNode(id){
    console.log(id);
    return this.http.get(`${base_url}${id}`);
  }
}
