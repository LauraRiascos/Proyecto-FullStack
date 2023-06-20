import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth, onValue, productosRef } from "../app/firebase.js";
import { loginCheck } from "../app/loginCheck.js";

import "../app/logout.js";
import "../app/registroForm.js";
import "../app/signinForm.js";


onAuthStateChanged(auth, (user) => {
  loginCheck(user);
});
