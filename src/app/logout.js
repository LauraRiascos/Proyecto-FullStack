import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";

const logout = document.querySelector('#logout')

if (logout) {
    logout.addEventListener('click', async () => {
        signOut(auth)
        console.log('user signed out')
    });
}
