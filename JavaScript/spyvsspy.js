import { initializeFirebase } from './module.js';

document.addEventListener('DOMContentLoaded', () => {
  const api_Key = window.FIREBASE_API_KEY;
  initializeFirebase(apiKey);
});
