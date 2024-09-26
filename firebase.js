// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0lhra1n_2Tt3bBw6JCNj9KdmJcBhEeHI",
  authDomain: "dexcraft-promo.firebaseapp.com",
  projectId: "dexcraft-promo",
  storageBucket: "dexcraft-promo.appspot.com",
  messagingSenderId: "412166680911",
  appId: "1:412166680911:web:165cdaeed348f18941d53a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export app and db for use in other files
export { app, db };
