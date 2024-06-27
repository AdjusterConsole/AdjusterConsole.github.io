import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getStorage, ref, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js';
import { getAuth, signInAnonymously } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyBbIDO_A-2sqnNP8qQC9OCJ2hOvfwwY050",
  authDomain: "adjusterestimate.firebaseapp.com",
  projectId: "adjusterestimate",
  storageBucket: "adjusterestimate.appspot.com",
  messagingSenderId: "76107438642",
  appId: "1:76107438642:web:1901ed4ba7801c3d147a2b",
  measurementId: "G-QLXRDC8KWY"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);

async function downloadFile(fileName) {
  try {
    const fileRef = ref(storage, fileName);
    const downloadURL = await getDownloadURL(fileRef);
    const response = await fetch(downloadURL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonContent = await response.json();
    return jsonContent;
  } catch (error) {
    console.error("Error downloading file:", error);
    return null;
  }
}

async function initializeFirebaseAuth() {
  try {
    await signInAnonymously(auth);
    console.log("Signed in anonymously");
  } catch (error) {
    console.error("Anonymous sign-in error:", error);
  }
}

initializeFirebaseAuth();

export { downloadFile };
