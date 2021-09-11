import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBybFzLo2YENGKK1vDk9YnXsqKmGht3Lg4",
  authDomain: "todo-app-backend-aae15.firebaseapp.com",
  projectId: "todo-app-backend-aae15",
  storageBucket: "todo-app-backend-aae15.appspot.com",
  messagingSenderId: "270417615359",
  appId: "1:270417615359:web:d6f0cb4b4d327ac4ed2fca",
  measurementId: "G-6KZRXQLGS2"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;