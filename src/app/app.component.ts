import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAc5baR016Rj4rAl7MKgQBpuAqWh0ft1HM',
      authDomain: 'angular2-a6834.firebaseapp.com',
      databaseURL: 'https://angular2-a6834.firebaseio.com',
      projectId: 'angular2-a6834',
      storageBucket: 'angular2-a6834.appspot.com',
      messagingSenderId: '189765392703'
    });

  }

}
