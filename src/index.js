import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import CoinsApp from './CoinsApp';
import './index.css';



firebase.initializeApp({
  apiKey: "AIzaSyAVSxXKxApjzPv0AqjMXOv1ttpIkRCrpjU",
  authDomain: "bitlab-withreact.firebaseapp.com",
  databaseURL: "https://bitlab-withreact.firebaseio.com",
  projectId: "bitlab-withreact",
  storageBucket: "bitlab-withreact.appspot.com",
  messagingSenderId: "690220146376"
});


ReactDOM.render(
<App />, document.getElementById('root'),

);

