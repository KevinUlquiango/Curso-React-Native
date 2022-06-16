import React from "react";
import { View, Text, FlatList } from "react-native";
import { getGrades } from "../services/GradeServices";
import { Wrapper } from "./style";
import { ItemGrede } from "../components/ItemGrede";
const GredeList = () => {
  return (
    <Wrapper>
      <Text>Formulario De Notas</Text>
      <FlatList
        data={getGrades()}
        renderItem={({ item }) => <ItemGrede qualification={item} />}
        keyExtractor={(index) => index.subject.toString()}
      />
    </Wrapper>
  );
};
export default GredeList;
