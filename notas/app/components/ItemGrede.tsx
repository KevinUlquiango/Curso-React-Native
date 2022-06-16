import React from "react";
import { View, Text } from "react-native";
import { Product } from "../../../navegacion/app/screens/ProductsScreen";
import { IGredes } from "../Interfaces/IGrades";

export const ItemGrede = ({ qualification }: IGredes | any) => {
  return (
    <View style={{ marginTop: 10 }}>
      <Text>
        {qualification.subject} {qualification.grade}
      </Text>
    </View>
  );
};
