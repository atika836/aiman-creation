import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
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

async function loadProducts() {
  const container = document.getElementById("dynamicProducts");
  if (!container) return;

  try {
    const snapshot = await getDocs(collection(db, "products"));

    snapshot.forEach((doc) => {
      const data = doc.data();

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${data.image}">
        <h3>${data.name}</h3>
        <p>₹${data.price}</p>
        <button onclick="addToCart('${data.name}')">Add to Cart</button>
        <button onclick="buyNow('${data.name}')">Buy Now</button>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

window.addToCart = function (name) {
  alert(`${name} cart mein add ho gaya`);
};

window.buyNow = function (name) {
  alert(`${name} ke liye order kiya jaa raha hai`);
};

loadProducts()
