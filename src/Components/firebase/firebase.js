// // import firebase from 'firebase'
// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// 	apiKey: "AIzaSyCEHF2JUVZxK4epv_Ixf16LKwlOWgASfW4",
// 	authDomain: "clone-c80e8.firebaseapp.com",
// 	projectId: "clone-c80e8",
// 	storageBucket: "clone-c80e8.appspot.com",
// 	messagingSenderId: "654964203447",
// 	appId: "1:654964203447:web:824cfd14a125fa34a09232",
// 	measurementId: "G-D727FQ0KXN",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth };



import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCEHF2JUVZxK4epv_Ixf16LKwlOWgASfW4",
	authDomain: "clone-c80e8.firebaseapp.com",
	projectId: "clone-c80e8",
	storageBucket: "clone-c80e8.appspot.com",
	messagingSenderId: "654964203447",
	appId: "1:654964203447:web:824cfd14a125fa34a09232",
	measurementId: "G-D727FQ0KXN",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };

// // Use this to initialize the firebase App
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth, db };
