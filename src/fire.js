
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyCVRmZvWnUg6CgAV3DqVm83fVupDs_e9pE",
  authDomain: "shopart-a186a.firebaseapp.com",
  projectId: "shopart-a186a",
  databaseURL:"https://shopart-a186a-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "shopart-a186a.appspot.com",
  messagingSenderId: "82207545581",
  appId: "1:82207545581:web:a1ef95f299b74864c314e4"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth();

export default auth;