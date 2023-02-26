
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5_KH8AS3Qs-acNFqER8_jYXfh643KgR4",
  authDomain: "todoapp-96524.firebaseapp.com",
  projectId: "todoapp-96524",
  storageBucket: "todoapp-96524.appspot.com",
  messagingSenderId: "986773765235",
  appId: "1:986773765235:web:8305e492fde0dae2fe3e06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export {  db,storage };