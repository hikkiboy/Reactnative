
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD0VaFAH4rgnytIj23co3BCKIYR2bV6u44",
  authDomain: "fomy-cd91e.firebaseapp.com",
  projectId: "fomy-cd91e",
  storageBucket: "fomy-cd91e.appspot.com",
  messagingSenderId: "80629367261",
  appId: "1:80629367261:web:344fd4e5e35190a12a3634",
  measurementId: "G-8Y7LBBMTJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


//android 192960584778-d1prdheqrt3l6fn750bi6f0t6it2l4j5.apps.googleusercontent.com