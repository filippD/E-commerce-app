import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCvBBaYnpWhwwXxvYIKy_iZ1UeNsjYIMbU",
    authDomain: "crwn-db-6079a.firebaseapp.com",
    databaseURL: "https://crwn-db-6079a.firebaseio.com",
    projectId: "crwn-db-6079a",
    storageBucket: "",
    messagingSenderId: "883162798769",
    appId: "1:883162798769:web:7efb2bbd65847440"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
