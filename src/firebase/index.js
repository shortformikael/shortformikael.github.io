import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDXy-2nF4JKNkkVa3C5oFgHyt9Br2AJWDQ",
  authDomain: "daily-quizlet.firebaseapp.com",
  projectId: "daily-quizlet",
  storageBucket: "daily-quizlet.appspot.com",
  messagingSenderId: "37617957212",
  appId: "1:37617957212:web:60146f99ade455e3672999"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db
}