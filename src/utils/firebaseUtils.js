import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
	apiKey: "AIzaSyADs07MbtwEqZwfK2y6_VxKKLovT_kVAF0",
	authDomain: "clone-5b1ca.firebaseapp.com",
	projectId: "clone-5b1ca",
	storageBucket: "clone-5b1ca.appspot.com",
	messagingSenderId: "225766114889",
	appId: "1:225766114889:web:fc6943b0853eb4e81e2198",
	measurementId: "G-XFKY7NLKVK",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export {db,auth};