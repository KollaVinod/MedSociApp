import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAsCzOaM_9KtdBs9dFnyaEep248lJpQf-A",
  authDomain: "media-ba73f.firebaseapp.com",
  projectId: "media-ba73f",
  storageBucket: "media-ba73f.appspot.com",
  messagingSenderId: "185580715308",
  appId: "1:185580715308:web:de6d1c7f0721d4cc5dc089"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db, onAuthStateChanged}
