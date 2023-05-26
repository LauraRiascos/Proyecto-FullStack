import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from './showMessage.js'

const signUpForm = document.querySelector("#signup-form");

if (signUpForm) {
    signUpForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        //   const name = signUpForm["signup-name"].value;
        const email = signUpForm["signup-email"].value;
        const password = signUpForm["signup-password"].value;

        console.log(email, password)

        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
            console.log(userCredentials)

            // reset the form
            signUpForm.reset();

            // show welcome message
            showMessage("Bienvenido " + userCredentials.user.email);

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                showMessage("Email already in use", "error")
            } else if (error.code === 'auth/invalid-email') {
                showMessage("Invalid email", "error")
            } else if (error.code === 'auth/weak-password') {
                showMessage("Weak password", "error")
            } else if (error.code) {
                showMessage("Something went wrong", "error")
            }
        }
    })
}
