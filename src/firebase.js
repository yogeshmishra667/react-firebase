import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXsYAFiGyIyl9VyOHV8edhkZBcYJjWjfo",
  authDomain: "resolute-ai-40bd8.firebaseapp.com",
  projectId: "resolute-ai-40bd8",
  storageBucket: "resolute-ai-40bd8.appspot.com",
  messagingSenderId: "326129261700",
  appId: "1:326129261700:web:5d81f4dcc14d65a2c8f6d1",
  measurementId: "G-30WLYM07PJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
