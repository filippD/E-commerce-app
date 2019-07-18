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


export const createUserProfileDocument = async (userAuth, otherData) => {
	if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
	if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
