import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
	getAuth,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	sendPasswordResetEmail,
} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyA7A3YwccAPTBMZh84xoujTqwj8dpPoFj4",
	authDomain: "pets-lovers-a2f10.firebaseapp.com",
	projectId: "pets-lovers-a2f10",
	storageBucket: "pets-lovers-a2f10.appspot.com",
	messagingSenderId: "1096079931736",
	appId: "1:1096079931736:web:34b45388be1ec74fb48d2d",
	measurementId: "G-RJJS8PG22Y",
};
const app = initializeApp(firebaseConfig, "pets-lovers");
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {
	db,
	auth,
	storage,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	sendPasswordResetEmail,
};
