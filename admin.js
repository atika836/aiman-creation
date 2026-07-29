import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDCVO-BMTMXOsTOTt-7SZuvdjj1PECG72o",
  authDomain: "aiman-creation-20865.firebaseapp.com",
  projectId: "aiman-creation-20865",
  storageBucket: "aiman-creation-20865.firebasestorage.app",
  messagingSenderId: "639010047446",
  appId: "1:639010047446:web:b83d01b56ef531b9751077"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.saveProduct = async function () {
  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  const image = document.getElementById("productImage").value;

  if (!name || !price || !image) {
    alert("Please fill all fields");
    return;
  }

  try {
    await addDoc(collection(db, "products"), {
      name,
      price,
      image
    });

    alert("✅ Product Saved Successfully");

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productImage").value = "";

  } catch (error) {
    alert(error.message);
  }
};
