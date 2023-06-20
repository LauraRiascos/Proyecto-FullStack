import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth, onValue, productosRef } from "../app/firebase.js";
import { loginCheck } from "../app/loginCheck.js";

import "../app/logout.js";
import "../app/registroForm.js";
import "../app/signinForm.js";

window.addEventListener("DOMContentLoaded", () => {
  onValue(productosRef, (snapshot) => {
    const postList = document.querySelector(".container-cursos");
    let html = "";

    snapshot.forEach((snap) => {
      const { nombre, precio, urlImagen, urlCurso } = snap.val();

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

            <a class="see-more" href="${urlCurso}">Ver curso</a>
        </div>
        `;
    });

    postList.innerHTML = html;
    
  });
});

onAuthStateChanged(auth, (user) => {
  loginCheck(user);
});
