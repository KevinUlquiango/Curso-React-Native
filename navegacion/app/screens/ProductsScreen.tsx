import { WrapperComponet, WrapperText } from "../../styles";
import { Button } from "react-native";
import React from "react";

type Props = { navigation: any };
export const Product = (props: Props) => {
  const { navigation } = props;
  return (
    <WrapperComponet>
      <WrapperText>Products</WrapperText>
      <Button
        title='Ir a Home'
        onPress={() => {
          navigation.navigate("HomeNav");
        }}
      ></Button>
    </WrapperComponet>
  );
};
