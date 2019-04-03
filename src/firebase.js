import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDZSFc-Y_TvoZEEr4hURwm_lKGXnNNifF8",
    authDomain: "whatsapp-clone-4c4b2.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-4c4b2.firebaseio.com",
    projectId: "whatsapp-clone-4c4b2",
    storageBucket: "whatsapp-clone-4c4b2.appspot.com",
    messagingSenderId: "748807201710"
}

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export const auth = firebase.auth()

export const database = firebase.database()