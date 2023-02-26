
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA9q1yty8cfcwxWDqBrVJ-E8tQP8jK0vqA",
  authDomain: "eshop-749f1.firebaseapp.com",
  projectId: "eshop-749f1",
  storageBucket: "eshop-749f1.appspot.com",
  messagingSenderId: "157881078690",
  appId: "1:157881078690:web:fe767212c0473211b218fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;