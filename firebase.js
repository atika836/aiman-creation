// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDCVO-BMTMXOsTOTt-7SZuvdjj1PECG72o",
  authDomain: "aiman-creation-20865.firebaseapp.com",
  projectId: "aiman-creation-20865",
  storageBucket: "aiman-creation-20865.firebasestorage.app",
  messagingSenderId: "639010047446",
  appId: "1:639010047446:web:b83d01b56ef531b9751077",
  measurementId: "G-MKVD2QGPSR"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
