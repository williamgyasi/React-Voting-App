import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
import 'firebase/auth'
import 'firebase/app'

const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
    apiKey: "AIzaSyBxodvY1ozA5-LSe_P1-AO3g3-W8YAhCiU",
    authDomain: "church-voter.firebaseapp.com",
    databaseURL: "https://church-voter.firebaseio.com",
    projectId: "church-voter",
    storageBucket: "church-voter.appspot.com",
    messagingSenderId: "126365005869",
    appId: "1:126365005869:web:81baa48bbc1f067a9ee0a4",
    measurementId: "G-HMDLR8FRMJ"
  };
firebase.initializeApp(firebaseConfig);
firebase.analytics()
firebase.auth()

export default {
  firebaseConfig, 
}
