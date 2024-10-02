import { db } from './firebase.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// Reference to the referral form
const referralForm = document.getElementById('referralForm');

// Function to handle form submission
async function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  const submitButton = event.target.querySelector('button[type="submit"]');

  // Change button text to "Submitting..." and disable the button
  submitButton.textContent = 'Submitting...';
  submitButton.disabled = true; 

  const name = document.getElementById('name').value;
  const accountNumber = document.getElementById('accountNumber').value;
  const bank = document.getElementById('bank').value;
  const email = document.getElementById('email').value;

  try {
    // Add data to Firestore
    const docRef = await addDoc(collection(db, "referrals"), {
      name,
      accountNumber,
      bank,
      email,
      timestamp: serverTimestamp(),
    });

    console.log("Document written with ID: ", docRef.id);

    // Redirect to success.html after successful submission
    setTimeout(() => {
      window.location.href = 'success.html'; // Redirect to success page
    }, 1500); // Simulate slight delay before redirection

  } catch (error) {
    console.error("Error adding document: ", error);
    // Re-enable the button and reset the text
    submitButton.textContent = 'Submit';
    submitButton.disabled = false;
  }
}

// Add the event listener for the form
referralForm.addEventListener('submit', handleSubmit);
