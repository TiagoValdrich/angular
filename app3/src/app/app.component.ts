import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {

    var config = {
      apiKey: "AIzaSyCCCicR9H2OyCGA4N5GfzRY-SXML9B5vWs",
      authDomain: "jta-instagram-clone-24f05.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-24f05.firebaseio.com",
      projectId: "jta-instagram-clone-24f05",
      storageBucket: "jta-instagram-clone-24f05.appspot.com",
      messagingSenderId: "317198111635"
    };

    firebase.initializeApp(config)
  }

}
