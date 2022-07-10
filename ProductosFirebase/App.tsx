import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import cargarConfiguracion from "./app/utils/FireBaseConfig";
import React from "react";
import {
  LoginNav,
  NavigationStack
} from "./app/utils/NavigationStack/Navigation";

export default function App() {
  cargarConfiguracion();

  return (
    <NavigationContainer>
      <LoginNav />
    </NavigationContainer>
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
