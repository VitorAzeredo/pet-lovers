import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword,
	signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDuZtkT49PaQqpJUp8sqeHhAqQDvXcTGL4",
  authDomain: "pet-lovers-f7d3a.firebaseapp.com",
  projectId: "pet-lovers-f7d3a",
  storageBucket: "pet-lovers-f7d3a.appspot.com",
  messagingSenderId: "134412710166",
  appId: "1:134412710166:web:ef17684d90255866dae037",
  measurementId: "G-3FPKDNN91T"
};
const app = initializeApp(firebaseConfig, 'pet-lovers');
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);




export { db, auth,storage, signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider, };