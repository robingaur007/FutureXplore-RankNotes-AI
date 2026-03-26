
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "futurexplore-ranknotes-ai.firebaseapp.com",
  projectId: "futurexplore-ranknotes-ai",
  storageBucket: "futurexplore-ranknotes-ai.firebasestorage.app",
  messagingSenderId: "197726691320",
  appId: "1:197726691320:web:9b01b862bea8687474c00d"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}