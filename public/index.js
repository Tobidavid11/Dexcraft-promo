import { db } from './firebase.js'; // Only import db since it's used
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// Reference to the referral form
const referralForm = document.getElementById('referralForm');

// Add an event listener to the form
referralForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const accountNumber = document.getElementById('accountNumber').value;
  const bank = document.getElementById('bank').value;
  const email = document.getElementById('email').value;

  try {
    // Log the data you're about to send
    console.log("Submitting data:", { name, accountNumber, bank, email });

    // Adding document to Firestore
    const docRef = await addDoc(collection(db, "referrals"), {
      name,
      accountNumber,
      bank,
      email,
      timestamp: serverTimestamp() // Use Firestore's server timestamp
    });

    console.log("Document written with ID: ", docRef.id);
    document.getElementById('successMessage').style.display = 'block'; // Show success message
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});
