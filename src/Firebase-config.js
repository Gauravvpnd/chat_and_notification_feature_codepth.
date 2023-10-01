import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC3Nr6uiuH_PBIYdvtXiVBYGMdzdl68nSc",
    authDomain: "chatapp-5dfea.firebaseapp.com",
    projectId: "chatapp-5dfea",
    storageBucket: "chatapp-5dfea.appspot.com",
    messagingSenderId: "187592308654",
    appId: "1:187592308654:web:2b42a912bd0aa6064f7a3f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();