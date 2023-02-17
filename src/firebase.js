import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    // apiKey: "AIzaSyDKLTx_T8Vvmu2SeIUKK-d2tYm1SfE82jQ",
    // authDomain: "messenger-app-ead6f.firebaseapp.com",
    // projectId: "messenger-app-ead6f",
    // storageBucket: "messenger-app-ead6f.appspot.com",
    // messagingSenderId: "248964718927",
    // appId: "1:248964718927:web:6e2f46f68014fbd201653a",
    // measurementId: "G-P28H5TE4RM"
    apiKey: "AIzaSyCY0PWp68TaOrn1YdoW1m6Rtsz1jrMGRWo",
    authDomain: "messenger-app-51269.firebaseapp.com",
    projectId: "messenger-app-51269",
    storageBucket: "messenger-app-51269.appspot.com",
    messagingSenderId: "705332602993",
    appId: "1:705332602993:web:a59ed72b42460bfe0f13d0",
    measurementId: "G-HKXQNWLC4B"
});
const db = firebaseApp.firestore();

export default db
