import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBS6SsrtxCM_RMXRXDFGyBsvHcBz4iUpNk",
    authDomain: "chat-app-c2c4d.firebaseapp.com",
    projectId: "chat-app-c2c4d",
    storageBucket: "chat-app-c2c4d.appspot.com",
    messagingSenderId: "883261728605",
    appId: "1:883261728605:web:2deb3d2ee429c23787eab4",
    measurementId: "G-SD0V3ZF4Z4"
  }).auth(); 