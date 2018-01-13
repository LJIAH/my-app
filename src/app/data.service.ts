import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  // 请求本地的json数据
  constructor(private http: Http) { }

  fetchData( ) {
    return this.http.get('https://angular2-a6834.firebaseio.com/.json')
      .map((res) => res.json());
  }

}
