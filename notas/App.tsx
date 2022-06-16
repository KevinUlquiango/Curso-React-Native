import { StatusBar } from "expo-status-bar";

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GradeForm from "./app/screens/GradeForm";
import GredeList from "./app/screens/GredeList";

export default function App() {
  const StarkGrades = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StarkGrades.Navigator>
        <StarkGrades.Screen
          name='GradeListNav'
          component={GredeList}
        />
        <StarkGrades.Screen
          name='GradeFormNav'
          component={GradeForm}
        />
      </StarkGrades.Navigator>
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
