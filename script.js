import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadProducts() {

  const productContainer = document.getElementById("products");
  productContainer.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "products"));

  querySnapshot.forEach((doc) => {

    const product = doc.data();

    productContainer.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" width="200">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>

        <button onclick="addToCart('${product.name}')">
          Add to Cart
        </button>

        <button onclick="buyNow('${product.name}')">
          Buy Now
        </button>

      </div>
    `;

  });

}

loadProducts();
