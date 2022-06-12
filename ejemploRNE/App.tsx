import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon } from "@rneui/base";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button
        icon={{
          name: "apple",
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
      ></Button>
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
