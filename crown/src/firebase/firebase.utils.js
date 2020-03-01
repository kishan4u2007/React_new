import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCwDp8qsF1v5lObtS_AgKMfolTWf5wfFtM",
    authDomain: "crwn-db-5155b.firebaseapp.com",
    databaseURL: "https://crwn-db-5155b.firebaseio.com",
    projectId: "crwn-db-5155b",
    storageBucket: "",
    messagingSenderId: "131441266560",
    appId: "1:131441266560:web:d5cfbb8fdbb1fdb7"
}

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({ prompt: 'select_account' });

 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;



 


