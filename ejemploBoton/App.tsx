import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ejemplo Btn</Text>
      <StatusBar style='auto' />
      <Button title="BTN1335" onPress={() =>{Alert.alert("BIENVENIDO")}}/>
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
