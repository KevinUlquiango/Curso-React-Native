import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {
  const [nombre,setNombre]= useState(null)
  return (
    <View style={styles.container}>
      <Text>{nombre}</Text>
      <TextInput  value={nombre} style ={styles.caja} onChangeText={(txt)=>{setNombre(txt)}}></TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  caja: {
    borderColor: '#1703fc',
    borderWidth: 1,
    padding:10,

  }
});
