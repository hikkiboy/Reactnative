import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {

  apiKey: "AIzaSyBUMWIctMwmBBp_Hl2MzXK2wpJckCkZeT8",

  authDomain: "fomy-5ea9c.firebaseapp.com",

  projectId: "fomy-5ea9c",

  storageBucket: "fomy-5ea9c.appspot.com",

  messagingSenderId: "27576730639",

  appId: "1:27576730639:web:d8e04715ded327539c0f7a"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


//android 192960584778-d1prdheqrt3l6fn750bi6f0t6it2l4j5.apps.googleusercontent.com