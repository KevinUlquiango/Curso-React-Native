import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Button, Icon, Input } from "@rneui/base";
import { Icon as CIcon } from "@rneui/themed";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState<any>();
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button
        icon={{
          name: "apple",
          /*
          Familia a la que pertenece
          consultar mas iconos en https://oblador.github.io/react-native-vector-icons/
          */

          type: "font-awesome",
          size: 15,
          color: "white"
        }}
        title={"React Native Elements"}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10
        }}
      />

      <Button
        onPress={() => {
          Alert.alert("Hola", "w");
        }}
      >
        <Icon name='home' color='white' />
      </Button>
      <CIcon name='g-translate' color='#00aced' />
      <Input
        value={name}
        onChangeText={setName}
        label={name}
        placeholder='Ingrese el nombre'
      />
      <Text>{name}</Text>
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
