// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQIXbiaQX2j-6USZVhMb7LO8Eh7Hs6WWo",
  authDomain: "auth-moha-milon-b527b.firebaseapp.com",
  projectId: "auth-moha-milon-b527b",
  storageBucket: "auth-moha-milon-b527b.appspot.com",
  messagingSenderId: "612874392686",
  appId: "1:612874392686:web:f268b17d5e0db5bdd4427f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
