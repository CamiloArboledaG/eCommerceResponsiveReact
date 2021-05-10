import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAdrdbrukNDkw0dbq-kWyvf6BoOoLLvSU0",
    authDomain: "eccomerce-react-ab.firebaseapp.com",
    projectId: "eccomerce-react-ab",
    storageBucket: "eccomerce-react-ab.appspot.com",
    messagingSenderId: "396170883788",
    appId: "1:396170883788:web:f866fe3c16328672b50869"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth};