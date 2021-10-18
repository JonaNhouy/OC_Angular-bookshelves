import { Component } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";

// import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshelves';

  constructor() {
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBDEBfVFnEe9Stnoe4LMhfCtQXsycW9tZ8",
      authDomain: "bookshelves-ef48b.firebaseapp.com",
      databaseURL: "http://bookshelves-ef48b.firebaseio.com",
      projectId: "bookshelves-ef48b",
      storageBucket: "bookshelves-ef48b.appspot.com",
      messagingSenderId: "456283791870",
      // appId: "1:456283791870:web:fc0aaaed3645200bb1a0af",
      // measurementId: "G-E121EPXDSW"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    
    // firebase.initializeApp(firebaseConfig);

  }

}
