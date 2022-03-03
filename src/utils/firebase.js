import firebase from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAmAIkWrYy72KwPOyamGj_SjsU4YRH2gg",
  authDomain: "smart-afbe5.firebaseapp.com",
  projectId: "smart-afbe5",
  storageBucket: "smart-afbe5.appspot.com",
  messagingSenderId: "966889269796",
  appId: "1:966889269796:web:e40783808a61a5cd4906b1"
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
