import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { getGrades } from "../services/GradeServices";
import { Wrapper } from "./style";
import { ItemGrede } from "../components/ItemGrede";
import { FAB } from "@rneui/base";
const GredeList = ({ navigation }: any) => {
  const [randam, setRandom] = useState<number>(0);

  const refresh = () => setRandom(Math.random() * 100);
  return (
    <>
      <FlatList
        data={getGrades()}
        renderItem={({ item }) => (
          <ItemGrede
            qualification={item}
            navigation={navigation}
            refresh={refresh}
          />
        )}
        keyExtractor={() => Math.random().toString()}
        extraData={randam}
      />
      <FAB
        title='+'
        placement='right'
        onPress={() => {
          navigation.navigate("GradeFormNav");
        }}
      />
    </>
  );
};

export default GredeList;
