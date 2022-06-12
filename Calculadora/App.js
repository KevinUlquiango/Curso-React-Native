import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";
import { useState } from "react";

export default function App() {
  const data = {
    valorUno: "",
    valorDos: "",
    resultado: 0
  };
  const [suma, setSuma] = useState(data);

  const sumarDatos = () => {
    const valorUno = parseInt(suma.valorUno);
    const valorDos = parseInt(suma.valorDos);
    const resultado = valorUno + valorDos;
    if (!isNaN(resultado)) {
      setSuma({ ...suma, resultado });
      console.log(suma);
    }
  };

  const limpiarDatos = () => {
    setSuma(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <TextInput
        placeholder='0'
        value={suma.valorUno}
        style={styles.input}
        onChangeText={(number) => {
          setSuma({ ...suma, valorUno: number });
        }}
        keyboardType='numeric'
      />
      <TextInput
        placeholder='0'
        value={suma.valorDos}
        style={styles.input}
        onChangeText={(number) => {
          setSuma({ ...suma, valorDos: number });
        }}
        keyboardType='numeric'
      />

      <Text>{`Resultado: ${suma.resultado}`}</Text>
      <View style={styles.button}>
        <Button
          style={styles.button}
          title='Sumar'
          onPress={sumarDatos}
        ></Button>
      </View>

      <View style={styles.button}>
        <Button title='Limpiar' onPress={limpiarDatos}></Button>
      </View>

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
  },
  title: {
    textTransform: "uppercase",
    margin: 10
  },
  input: {
    width: "50%",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    margin: 10
  },
  button: {
    margin: 10
  }
});
