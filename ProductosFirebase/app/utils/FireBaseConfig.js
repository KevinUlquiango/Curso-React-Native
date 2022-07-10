import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAouIj8ZwbV8icVNQZAHsFHHIFAnFZtnrs",
  authDomain: "ejemplofirebase-97c78.firebaseapp.com",
  projectId: "ejemplofirebase-97c78",
  storageBucket: "ejemplofirebase-97c78.appspot.com",
  messagingSenderId: "139111542176",
  appId: "1:139111542176:web:57c5677b07dcaadea408c5"
};

const cargarConfiguracion = () => {
  console.log("Inicializando Firebase");
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //Implementa global propio de JS para cargar desde todo el proyecto
  global.dbCon = getFirestore(app);
};
export default cargarConfiguracion;
