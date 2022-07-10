import { Login } from "../interface/Login";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
export const AutenticationLogin = (props: Login) => {
  const { email, password } = props;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Ingreso Exitoso", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error", errorCode);
      console.log("errorMessage", errorMessage);
      // ..
    });
};

export const AutenticationLogout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("Cierre Exitoso");
    })
    .catch((error) => {
      console.log("Cierre Fallido");
    });
};
