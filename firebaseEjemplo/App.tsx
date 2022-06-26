import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  collection,
  getDoc
} from "firebase/firestore";
import { Persona } from "./interface/Persona";
import React from "react";
import { WraperButton } from "./styles/stylesGlobal";

const firebaseConfig = {
  apiKey: "AIzaSyAouIj8ZwbV8icVNQZAHsFHHIFAnFZtnrs",
  authDomain: "ejemplofirebase-97c78.firebaseapp.com",
  projectId: "ejemplofirebase-97c78",
  storageBucket: "ejemplofirebase-97c78.appspot.com",
  messagingSenderId: "139111542176",
  appId: "1:139111542176:web:57c5677b07dcaadea408c5"
};

//Inicializar firebase app
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default function App() {
  const nuevaPersona: Persona = {
    nombre: "Samanta",
    apellido: "Vega11",
    cedula: "147841151"
  };

  const nuevaPersona2: Persona = {
    nombre: "Mishell",
    apellido: "Fernandez",
    cedula: "18754785412"
  };
  /*
  Una forma de guardar
  De esta forma guardamos sobre el id que le paramos
  */
  const guardar = () => {
    const refPersona = doc(db, "Personas", "174444");
    setDoc(refPersona, nuevaPersona);
  };
  /*
  SEGUNDA FORMA DE GUARDAR
  de esta forma generamos automaticamente el id  
  */
  const guardarConAdd = () => {
    const refPersonas = collection(db, "Personas");
    addDoc(refPersonas, nuevaPersona2);
  };

  const recuperarDocuments = async () => {
    const refPersona = doc(db, "Personas", "17444411111");
    const personaSnap = await getDoc(refPersona);
    if (personaSnap.exists()) {
      console.log("Persona", personaSnap.data());
    } else {
      console.log("No Existe");
    }
  };
  return (
    <View style={styles.container}>
      <Text>KUG1404</Text>
      <WraperButton>
        <Button title='GuardarConSetDoc' onPress={guardar} />
      </WraperButton>
      <WraperButton>
        <Button title='GuardarConAdd' onPress={guardarConAdd} />
      </WraperButton>
      <WraperButton>
        <Button title='Recuperar Doc' onPress={recuperarDocuments} />
      </WraperButton>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
