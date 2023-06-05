// Import the functions you need from the SDKs you need
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {
  getDatabase,
  ref as refDatabase,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASgBbrfWxyPa8whweQYa6vSCIhrmkAvzw",
  authDomain: "upb-open.firebaseapp.com",
  databaseURL: "https://upb-open-default-rtdb.firebaseio.com",
  projectId: "upb-open",
  storageBucket: "upb-open.appspot.com",
  messagingSenderId: "528037670196",
  appId: "1:528037670196:web:24a04b01ad2468dc00c961",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase();

export const productosRef = refDatabase(rtdb, "productos");
export const listarProductos = async () => {
  onValue(productosRef, (snapshot) => {
    snapshot.forEach((snap) => console.log("holaaaa"));
  });
};

export { onValue };
