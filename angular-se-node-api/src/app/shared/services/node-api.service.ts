import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = 'https://local.sportsengine.com/node/api/v1?id=';

@Injectable({
  providedIn: 'root'
})
export class NodeApiService {
  private node = '11991';

  constructor(private http: HttpClient) { }

  //returns an observable
  all(){
    return this.http.get(`${base_url}${this.node}`);
  }
}
