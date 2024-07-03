import { initializeFirebase } from './firebase.js';

document.addEventListener('DOMContentLoaded', () => {
  const api_Key = window.FIREBASE_API_KEY;
  initializeFirebase(api_Key);
});
