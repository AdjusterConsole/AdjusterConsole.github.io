import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: window.FIREBASE_API_KEY,  
  authDomain: "adjusterestimate.firebaseapp.com",
  projectId: "adjusterestimate",
  storageBucket: "adjusterestimate.appspot.com",
  messagingSenderId: "76107438642",
  appId: "1:76107438642:web:1901ed4ba7801c3d147a2b",
  measurementId: "G-QLXRDC8KWY"
};
console.log(window.FIREBASE_API_KEY);
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const auth = getAuth(app);
signInAnonymously(auth)
  .then(() => {
    console.log('Signed in anonymously');
  })
  .catch((error) => {
    console.error('Anonymous sign-in error:', error);
  });

async function downloadFile(referenceKey) {
  const filePath = `uploads/${referenceKey}.json`; 
  const storageRef = ref(storage, filePath);
  try {
    const url = await getDownloadURL(storageRef);
    
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json'; 
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(new Error('Failed to download file'));
        }
      };
      xhr.onerror = () => reject(new Error('Network error'));
      xhr.open('GET', url);
      xhr.send();
    });
    
  } catch (error) {
    console.error('Error downloading file:', error);
    return null;
  }
}

export { downloadFile };
