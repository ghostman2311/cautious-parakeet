import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcmSGQ_62-gBpvNzRjPwCM_JRUF-JNzxk",
  authDomain: "revision-crwn-a255d.firebaseapp.com",
  projectId: "revision-crwn-a255d",
  storageBucket: "revision-crwn-a255d.appspot.com",
  messagingSenderId: "582326594383",
  appId: "1:582326594383:web:8cda817ea085027cc3f33a",
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
