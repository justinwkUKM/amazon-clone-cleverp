import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyBm2KlnbUKPS4_9fBzze4AGzh72t1zCkmY",
    authDomain: "clone-9bbb8.firebaseapp.com",
    databaseURL: "https://clone-9bbb8.firebaseio.com",
    projectId: "clone-9bbb8",
    storageBucket: "clone-9bbb8.appspot.com",
    messagingSenderId: "615111449751",
    appId: "1:615111449751:web:fd86153d4b3a518a4a1dd2",
    measurementId: "G-HSR6ZPK6DV",

});

const auth = firebase.auth();

export { auth };
