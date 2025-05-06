import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5tX8lnpwuhO5pwbI7JGKqQHOINZpJCDc",
  authDomain: "movie-recommendation-90d37.firebaseapp.com",
  projectId: "movie-recommendation-90d37",
  storageBucket: "movie-recommendation-90d37.firebasestorage.app",
  messagingSenderId: "1064503636786",
  appId: "1:1064503636786:web:81712ec73e79abb7811d2b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
