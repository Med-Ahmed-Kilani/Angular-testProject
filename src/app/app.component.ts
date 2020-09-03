import { Component } from '@angular/core';
import* as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'projet';
  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyCuMhQi2AyweN-b_ErcxFDoHfY_Nu9fn6w",
      authDomain: "projet-c9f79.firebaseapp.com",
      databaseURL: "https://projet-c9f79.firebaseio.com",
      projectId: "projet-c9f79",
      storageBucket: "projet-c9f79.appspot.com",
      messagingSenderId: "891736230499",
      appId: "1:891736230499:web:c58fc74479f949ea440656",
      measurementId: "G-LER88DXK1B"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
