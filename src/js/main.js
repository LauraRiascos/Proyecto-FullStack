import { auth, onValue, productosRef } from "../app/firebase.js";
import {
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { loginCheck } from "../app/loginCheck.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { setupPosts } from "../app/postList.js";

import "../app/logout.js";
import "../app/registroForm.js";
import "../app/signinForm.js";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    // const querySnapshot = await getDocs(collection(db, "post"));
    // setupPosts(querySnapshot.docs);

    onValue(productosRef, (snapshot) => {
      const postList = document.querySelector(".container-cursos");
      let html = "";

      snapshot.forEach((snap) => {
        const { nombre, precio, urlImagen } = snap.val();

        html += `
        <div class="card" id="curso-card">
            <div class="card-image" style="background-image: url(${urlImagen})"></div>
            <h2 class="produc-title">${nombre}</h2>

            <p class="produc-price">${parseInt(precio)
              .toLocaleString("es-CO", {
                style: "currency",
                currency: "COP",
              })
              .slice(0, -3)}</p>

            <a class="see-more">Ver curso</a>
        </div>
        `;
      });

      postList.innerHTML = html;
    });
  } else {
    setupPosts([]);
  }
  loginCheck(user);
});
