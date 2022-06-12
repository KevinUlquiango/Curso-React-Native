import { useContext, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import UserContext from "./hooks/UserContext";
import { InputText } from "./component/InputText/InputText";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button
} from "react-native";
import { ListText } from "./component/ListText/ListText";
import {
  Wrapper,
  WrapperListText,
  WrapperArea,
  WrapperAreaHeader
} from "./style";

let personas = [
  {
    name: "Kevin1",
    lastname: "Ulquiango",
    dni: 12345678,
    id: 0
  },
  {
    name: "Carlos",
    lastname: "Perez",
    dni: 12345678,
    id: 1
  },
  {
    name: "Juan",
    lastname: "Lopez",
    dni: 12345678,
    id: 2
  }
];

const Aplication = () => {
  const state = { dni: "", name: "", lastname: "",id:Math.random() };
  const [data, setData] = useState(state);
  const [dataPersons, setPersons] = useState(personas);
  const { isNew, isUserNew, dataUserInput } = useContext(UserContext);

  const save = () => {
    if (isUserNew) {
      dataPersons.push(data);
      setPersons([...dataPersons], dataPersons);
    } else {
      dataPersons[dataUserInput.index] = dataUserInput.item;
    }

    setData(state);
    isNew(true);
  };

  return (
    <Wrapper>
      <WrapperAreaHeader>
        <Text>Personas</Text>
        <InputText
          data={data}
          functionState={setData}
          nameData='name'
          textPlaceholder='Nombre'
          keyboardType='numeric'
        />
        <InputText
          data={data}
          functionState={setData}
          nameData='lastname'
          textPlaceholder='Apellido'
        />
        <InputText
          data={data}
          functionState={setData}
          nameData='dni'
          textPlaceholder='Cédula'
        />
        <Button title='Guardar' onPress={save} />
      </WrapperAreaHeader>

      <WrapperArea>
        <FlatList
          data={dataPersons}
          keyExtractor={(element) => element.id}
          renderItem={(element) => (
            <WrapperListText>
              <ListText
                dataPerson={dataPersons}
                styles={styles.item}
                stylesGeneral={styles}
                element={element.index}
                index={element.index}
              />
              <ListText
                dataPerson={dataPersons}
                styles={styles.datos}
                stylesGeneral={styles}
                element={element}
              />
            </WrapperListText>
          )}
        />
        <StatusBar style='auto' />
      </WrapperArea>
      <View style={styles.areaPie}>
        <Text>Pie</Text>
      </View>
    </Wrapper>
  );
};
const styles = StyleSheet.create({
  areaPie: {
    flex: 1
  },
  item: {
    flex: 1,
    backgroundColor: "#30e371",
    justifyContent: "center",
    alignItems: "center",
    padding: 25
  },
  datos: {
    flex: 10,
    backgroundColor: "#f0c930",
    padding: 2,
    flexDirection: "row"
  },
  btnCheck: {
    padding: 15,
    backgroundColor: "#30e371",
    marginRight: 10
  },
  btnTrash: {
    padding: 15,
    backgroundColor: "#e85a5a"
  }
});
export default Aplication;
